"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Line, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";

// --- Types & Data ---

type FeatureNode = {
    id: string;
    label: string;
    position: [number, number, number];
    color: string;
    curvePoints: THREE.Vector3[];
};

const COLORS = {
    core: "#09090b", // Deep zinc black
    glow: "#4f46e5", // Indigo glow
    accent1: "#6366f1", // Indigo
    accent2: "#8b5cf6", // Violet
    accent3: "#a855f7", // Purple
    accent4: "#3b82f6", // Blue
    white: "#ffffff",
    muted: "#52525b" // Zinc 600
};

// Generate curved paths from center (0,0,0) to random outer points
const generateNodes = (): FeatureNode[] => {
    const features = [
        { id: "pdf", label: "ControlPDF", color: COLORS.accent1 },
        { id: "img", label: "Image Management", color: COLORS.accent4 },
        { id: "org", label: "Smart Organizer", color: COLORS.accent2 },
        { id: "bak", label: "Automated Backups", color: COLORS.accent3 }
    ];

    // Create more paths than features for a denser, more complex network look
    const totalNodes = 12;
    const nodes: FeatureNode[] = [];

    for (let i = 0; i < totalNodes; i++) {
        const isFeature = i < features.length;
        const feat = isFeature ? features[i] : { id: `dummy-${i}`, label: "", color: COLORS.muted };

        // Spread them in a spherical distribution
        const theta = (i / totalNodes) * Math.PI * 2 + Math.random() * 0.5;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 3.5 + Math.random() * 2.5;

        const endX = radius * Math.sin(phi) * Math.cos(theta);
        const endY = radius * Math.sin(phi) * Math.sin(theta);
        const endZ = radius * Math.cos(phi);

        // Advanced curve mapping for organic branching
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(endX, endY, endZ);

        // Push control point outwards for tentacle-like effect
        const midX = (start.x + end.x) / 2 + (Math.random() - 0.5) * 4;
        const midY = (start.y + end.y) / 2 + (Math.random() - 0.5) * 4;
        const midZ = (start.z + end.z) / 2 + (Math.random() - 0.5) * 4;
        const control = new THREE.Vector3(midX, midY, midZ);

        const curve = new THREE.QuadraticBezierCurve3(start, control, end);
        const curvePoints = curve.getPoints(50); // 50 points for smooth line

        nodes.push({
            ...feat,
            position: [endX, endY, endZ],
            curvePoints,
        });
    }

    return nodes;
};

// --- Components ---

function CoreBlob() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
            wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <Float floatIntensity={1.5} speed={1.2}>
            {/* Inner glowing core */}
            <Sphere args={[0.9, 32, 32]}>
                <meshBasicMaterial color={COLORS.glow} transparent opacity={0.15} />
            </Sphere>

            {/* Main dark geometric core */}
            <Sphere ref={meshRef} args={[0.8, 64, 64]}>
                <meshStandardMaterial
                    color={COLORS.core}
                    roughness={0.1}
                    metalness={0.8}
                    envMapIntensity={2}
                />
            </Sphere>

            {/* Outer technical wireframe shell */}
            <Sphere ref={wireframeRef} args={[1.1, 16, 16]}>
                <meshBasicMaterial
                    color={COLORS.accent1}
                    wireframe={true}
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </Float>
    );
}

function NetworkBranch({ node }: { node: FeatureNode }) {
    const [hovered, setHover] = useState(false);
    const hasLabel = node.label !== "";

    // Subtle spring animation for hover
    const { scale, textOpacity } = useSpring({
        scale: hovered ? 1.4 : 1,
        textOpacity: hovered ? 1 : 0.4,
        config: { mass: 1, tension: 280, friction: 30 }
    });

    return (
        <a.group
            onPointerOver={(e) => {
                if (hasLabel) {
                    e.stopPropagation();
                    setHover(true);
                }
            }}
            onPointerOut={() => setHover(false)}
            scale={scale}
        >
            {/* The curved trajectory line */}
            <Line
                points={node.curvePoints}
                color={hovered ? node.color : COLORS.muted}
                lineWidth={hovered ? 1.5 : 1}
                transparent
                opacity={hovered ? 0.8 : (hasLabel ? 0.3 : 0.1)}
            />

            {/* The end node (circle) */}
            {hasLabel && (
                <>
                    <mesh position={node.position}>
                        <ringGeometry args={[0.1, 0.15, 32]} />
                        <meshBasicMaterial color={node.color} side={THREE.DoubleSide} transparent opacity={hovered ? 1 : 0.6} />
                    </mesh>

                    {/* Inner glowing dot */}
                    <mesh position={node.position}>
                        <circleGeometry args={[0.05, 32]} />
                        <meshBasicMaterial color={hovered ? COLORS.white : node.color} />
                    </mesh>

                    {/* Feature Label - Highly technical mono font look */}
                    <group position={[node.position[0], node.position[1] - 0.4, node.position[2] + 0.1]}>
                        <Text
                            color={hovered ? COLORS.white : COLORS.muted}
                            fontSize={0.25}
                            maxWidth={3}
                            lineHeight={1}
                            letterSpacing={0.05}
                            textAlign="center"
                            anchorX="center"
                            anchorY="middle"
                            font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwI.woff"
                            fillOpacity={hovered ? 1 : 0.7}
                        >
                            {node.label.toUpperCase()}
                        </Text>
                    </group>
                </>
            )}

            {/* Tiny connector nodes for empty branches to add technical detail */}
            {!hasLabel && (
                <mesh position={node.position}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshBasicMaterial color={COLORS.muted} transparent opacity={0.2} />
                </mesh>
            )}
        </a.group>
    );
}

export default function AlephVisual() {
    const nodes = useMemo(() => generateNodes(), []);

    return (
        <div className="absolute inset-0 h-[130%] w-[130%] -left-[15%] -top-[15%] hidden lg:block overflow-visible" style={{ pointerEvents: 'auto' }}>
            {/* Crystal clear dark mode 3D render */}
            <Canvas
                camera={{ position: [0, 0, 12], fov: 40 }}
                style={{ width: '100%', height: '100%' }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 20, 10]} intensity={1.5} color={COLORS.white} />
                <pointLight position={[-10, -10, -10]} intensity={2} color={COLORS.glow} />

                {/* Slowly rotating container for the entire network */}
                <Float speed={0.2} rotationIntensity={0.05} floatIntensity={0.05}>
                    <group rotation={[Math.PI / 12, -Math.PI / 8, 0]}>
                        <CoreBlob />
                        {nodes.map(node => (
                            <NetworkBranch key={node.id} node={node} />
                        ))}
                    </group>
                </Float>
            </Canvas>
        </div>
    );
}
