"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";

/* ══════════════════════════════════════════════════════
   Pipeline Architecture — 4 stages, 1 node per stage:
   DETECT  →  ANALYZE  →  EXECUTE  →  VERIFY
   Clean, horizontal flow. No clutter.
   ══════════════════════════════════════════════════════ */

interface PipelineNode {
    id: string;
    index: number;
    icon: string;
    label: string;
    layer: string;
}

const LAYERS = [
    { key: "detect", label: "DETECT", description: "Real-time file system monitoring", color: "#8aacb8" },
    { key: "analyze", label: "ANALYZE", description: "Pattern matching & rule evaluation", color: "#a0a8b0" },
    { key: "execute", label: "EXECUTE", description: "Action dispatch & processing", color: "#c0c0c0" },
    { key: "verify", label: "VERIFY", description: "Integrity checks & logging", color: "#90988a" },
];

const NODES: PipelineNode[] = [
    { id: "detect", index: 0, icon: "sensors", label: "Watcher", layer: "detect" },
    { id: "analyze", index: 1, icon: "account_tree", label: "Rule Engine", layer: "analyze" },
    { id: "execute", index: 2, icon: "hub", label: "Dispatcher", layer: "execute" },
    { id: "verify", index: 3, icon: "verified", label: "Integrity", layer: "verify" },
];

const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3]];

/* Detail content per layer */
const LAYER_DETAILS: Record<string, { title: string; subtitle: string; features: string[]; stat: { value: string; label: string } }> = {
    detect: {
        title: "Detection Layer",
        subtitle: "File system events are captured instantly through recursive watchers with sub-millisecond response.",
        features: [
            "Recursive directory watching",
            "Create, modify, delete & rename events",
            "Debounced event bus for deduplication",
            "Zero-polling, event-driven architecture",
        ],
        stat: { value: "<1ms", label: "Event latency" },
    },
    analyze: {
        title: "Analysis Layer",
        subtitle: "Events are evaluated against your ruleset using regex matching, metadata inspection, and conditional logic.",
        features: [
            "Regex & glob pattern matching",
            "Size, date & extension filters",
            "Priority-based rule ordering",
            "Chained condition evaluation",
        ],
        stat: { value: "128", label: "Active rules" },
    },
    execute: {
        title: "Execution Layer",
        subtitle: "Matched rules trigger actions through a parallel dispatcher with built-in conflict resolution and rollback.",
        features: [
            "Move, copy, rename & compress",
            "Parallel action execution",
            "Conflict resolution with safe paths",
            "Rollback support on failure",
        ],
        stat: { value: "94MB/s", label: "Throughput" },
    },
    verify: {
        title: "Verification Layer",
        subtitle: "Every action is verified for integrity and permanently logged for audit, transparency and rollback.",
        features: [
            "SHA-256 hash verification",
            "Structured JSON audit logs",
            "Desktop notifications",
            "Full execution history",
        ],
        stat: { value: "99.9%", label: "Reliability" },
    },
};

/* ── Animated data packet ─────────────────────────── */
function DataPacket({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
    return (
        <motion.circle
            r={3}
            fill="#C0C0C0"
            initial={{ cx: x1, cy: y1, opacity: 0 }}
            animate={{
                cx: [x1, x2],
                cy: [y1, y2],
                opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
                duration: 1.6,
                delay,
                repeat: Infinity,
                repeatDelay: 2.5 + Math.random() * 2,
                ease: "easeInOut",
            }}
        />
    );
}

export default function NeuralFlowSection() {
    const graphRef = useRef<HTMLDivElement>(null);
    const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
    const [graphSize, setGraphSize] = useState({ w: 800, h: 300 });

    const mouseX = useMotionValue(0.5);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const offsetX = useTransform(springX, [0, 1], [-6, 6]);

    useEffect(() => {
        const el = graphRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            setGraphSize({ w: entry.contentRect.width, h: entry.contentRect.height });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = graphRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width);
    }, [mouseX]);

    /* Node positions: evenly distributed horizontally, centered vertically */
    const nodePixelPos = useCallback((index: number) => {
        const padding = 0.12; // 12% padding on each side
        const usable = 1 - padding * 2;
        const step = usable / (NODES.length - 1);
        const x = (padding + step * index) * graphSize.w;
        const y = graphSize.h * 0.5;
        return { x, y };
    }, [graphSize]);

    const activeDetail = useMemo(() => {
        return hoveredLayer ? LAYER_DETAILS[hoveredLayer] : null;
    }, [hoveredLayer]);

    return (
        <section className="py-28 px-8 max-w-screen-2xl mx-auto relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
                    Neural Infrastructure
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)] mb-4">
                    How Data Flows
                </h3>
                <p className="text-[#999] max-w-xl text-lg leading-relaxed">
                    A four-stage pipeline that turns raw file system events into verified, automated actions.
                </p>
            </motion.div>

            {/* ── Graph Container (full width) ────── */}
            <motion.div
                ref={graphRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredLayer(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full rounded-2xl border border-[#333]/40 overflow-hidden mb-10"
                style={{ background: "rgba(13,14,15,0.5)", height: "280px" }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(192,192,192,0.025),transparent_70%)]" />

                {/* Layer column highlights */}
                {LAYERS.map((layer, i) => {
                    const padding = 0.12;
                    const usable = 1 - padding * 2;
                    const step = usable / (NODES.length - 1);
                    const centerPct = (padding + step * i) * 100;
                    return (
                        <div
                            key={layer.key}
                            className="absolute top-0 bottom-0 transition-all duration-400"
                            style={{
                                left: `${centerPct - 10}%`,
                                width: "20%",
                                background: hoveredLayer === layer.key
                                    ? "rgba(192,192,192,0.025)"
                                    : "transparent",
                            }}
                        >
                            <span
                                className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase select-none transition-colors duration-300"
                                style={{
                                    color: hoveredLayer === layer.key ? "rgba(192,192,192,0.5)" : "rgba(192,192,192,0.15)",
                                }}
                            >
                                {layer.label}
                            </span>
                        </div>
                    );
                })}

                {/* SVG: Edges + Data Packets */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    style={{ x: offsetX }}
                >
                    {/* Connection lines */}
                    {EDGES.map(([fromIdx, toIdx]) => {
                        const p1 = nodePixelPos(fromIdx);
                        const p2 = nodePixelPos(toIdx);
                        const fromLayer = NODES[fromIdx].layer;
                        const toLayer = NODES[toIdx].layer;
                        const active = hoveredLayer && (fromLayer === hoveredLayer || toLayer === hoveredLayer);
                        const dimmed = hoveredLayer && !active;

                        return (
                            <line
                                key={`${fromIdx}-${toIdx}`}
                                x1={p1.x} y1={p1.y}
                                x2={p2.x} y2={p2.y}
                                stroke={active ? "rgba(192,192,192,0.35)" : "rgba(192,192,192,0.1)"}
                                strokeWidth={active ? 1.5 : 0.8}
                                strokeDasharray={active ? "none" : "6 8"}
                                style={{
                                    opacity: dimmed ? 0.2 : 1,
                                    transition: "all 0.4s ease",
                                }}
                            />
                        );
                    })}

                    {/* Data packets */}
                    {EDGES.map(([fromIdx, toIdx], i) => {
                        const p1 = nodePixelPos(fromIdx);
                        const p2 = nodePixelPos(toIdx);
                        return (
                            <DataPacket
                                key={`pkt-${fromIdx}-${toIdx}`}
                                x1={p1.x} y1={p1.y}
                                x2={p2.x} y2={p2.y}
                                delay={i * 0.8}
                            />
                        );
                    })}
                </motion.svg>

                {/* Nodes */}
                <motion.div className="absolute inset-0" style={{ x: offsetX }}>
                    {NODES.map((node) => {
                        const padding = 0.12;
                        const usable = 1 - padding * 2;
                        const step = usable / (NODES.length - 1);
                        const xPct = (padding + step * node.index) * 100;
                        const isActive = hoveredLayer === node.layer;
                        const dimmed = hoveredLayer && !isActive;
                        const layerColor = LAYERS.find(l => l.key === node.layer)!.color;

                        return (
                            <motion.div
                                key={node.id}
                                className="absolute flex flex-col items-center gap-3 cursor-pointer"
                                style={{
                                    left: `${xPct}%`,
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                                onMouseEnter={() => setHoveredLayer(node.layer)}
                                animate={{
                                    opacity: dimmed ? 0.25 : 1,
                                    scale: isActive ? 1.12 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon */}
                                <div
                                    className="neural-node-icon"
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "16px",
                                        borderColor: isActive ? layerColor : "rgba(68,71,72,0.25)",
                                        boxShadow: isActive ? `0 0 28px ${layerColor}22` : "none",
                                    }}
                                >
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            fontSize: "1.4rem",
                                            color: isActive ? layerColor : "rgba(192,192,192,0.4)",
                                            transition: "color 0.3s",
                                        }}
                                    >
                                        {node.icon}
                                    </span>
                                </div>

                                {/* Label */}
                                <span className="text-[13px] font-semibold text-[#ccc] font-[family-name:var(--font-space-grotesk)] tracking-wide whitespace-nowrap">
                                    {node.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* ── Detail Cards Row ─────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {LAYERS.map((layer, i) => {
                    const detail = LAYER_DETAILS[layer.key];
                    const isActive = hoveredLayer === layer.key;

                    return (
                        <motion.div
                            key={layer.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                            className="rounded-xl border p-7 flex flex-col cursor-pointer transition-all duration-300"
                            style={{
                                background: isActive ? "rgba(26,27,27,0.8)" : "rgba(13,14,15,0.5)",
                                borderColor: isActive ? "rgba(192,192,192,0.15)" : "rgba(51,51,51,0.4)",
                            }}
                            onMouseEnter={() => setHoveredLayer(layer.key)}
                            onMouseLeave={() => setHoveredLayer(null)}
                        >
                            {/* Tag */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#777]">
                                    {layer.label}
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-bold text-[#e5e5e5] font-[family-name:var(--font-space-grotesk)] mb-2">
                                {detail.title}
                            </h4>

                            {/* Description */}
                            <p className="text-[13px] text-[#999] leading-relaxed mb-5 flex-1">
                                {detail.subtitle}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-5">
                                {detail.features.slice(0, 3).map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#666] mt-1.5 shrink-0" />
                                        <span className="text-[12px] text-[#888]">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stat */}
                            <div className="pt-4 border-t border-[#333]/40">
                                <span className="text-2xl font-bold text-[#d0d0d0] font-[family-name:var(--font-space-grotesk)]">
                                    {detail.stat.value}
                                </span>
                                <span className="text-[10px] text-[#666] font-mono tracking-wider ml-2 uppercase">
                                    {detail.stat.label}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
