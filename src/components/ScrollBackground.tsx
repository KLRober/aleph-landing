"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Floating Particle ──────────────────────── */
interface Particle {
    id: number;
    x: number;      // % from left
    y: number;      // % from top (of body)
    size: number;    // px
    delay: number;   // animation-delay
    duration: number;
    opacity: number;
}

function generateParticles(count: number): Particle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 10,
        opacity: Math.random() * 0.25 + 0.05,
    }));
}

export default function ScrollBackground() {
    const { scrollYProgress } = useScroll();
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        setParticles(generateParticles(40));
    }, []);

    // Scroll-driven transforms for gradient orbs
    const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const orbY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
    const orbOpacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.06, 0.1, 0.04, 0.02]);
    const orbOpacity2 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.03, 0.08, 0.06, 0.02]);
    const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.9]);

    // Grid line opacity fades as you scroll
    const gridOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4], [0.06, 0.04, 0]);

    // Horizontal scan line travels down
    const scanLineY = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);
    const scanLineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.5, 0.8, 1], [0, 0.15, 0.08, 0.12, 0]);

    return (
        <div className="scroll-bg-container" aria-hidden="true">

            {/* ── Gradient Orbs ──────────────────── */}
            <motion.div
                className="scroll-bg-orb scroll-bg-orb--1"
                style={{ y: orbY1, opacity: orbOpacity1, scale: orbScale }}
            />
            <motion.div
                className="scroll-bg-orb scroll-bg-orb--2"
                style={{ y: orbY2, opacity: orbOpacity2 }}
            />
            <motion.div
                className="scroll-bg-orb scroll-bg-orb--3"
                style={{ y: orbY3, opacity: orbOpacity1 }}
            />

            {/* ── Subtle Grid ──────────────────── */}
            <motion.div className="scroll-bg-grid" style={{ opacity: gridOpacity }} />

            {/* ── Horizontal Scan Line ──────────── */}
            <motion.div
                className="scroll-bg-scanline"
                style={{ y: scanLineY, opacity: scanLineOpacity }}
            />

            {/* ── Floating Particles ──────────── */}
            <div className="scroll-bg-particles">
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className="scroll-bg-dot"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            opacity: p.opacity,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* ── Noise Texture Overlay ─────────── */}
            <div className="scroll-bg-noise" />
        </div>
    );
}
