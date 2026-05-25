"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ══════════════════════════════════════════════════════
   Pipeline Architecture — 4 stages:
   DETECT  →  ANALYZE  →  EXECUTE  →  VERIFY
   ══════════════════════════════════════════════════════ */

const STAGES = [
    {
        key: "detect",
        icon: "sensors",
        label: "Detect",
        tagline: "Watch",
        title: "Detection Layer",
        description: "File system events are captured instantly through recursive watchers with sub-millisecond response.",
        features: [
            "Recursive directory watching",
            "Create, modify, delete & rename events",
            "Debounced event bus for deduplication",
            "Zero-polling, event-driven architecture",
        ],
        stat: { value: "<1ms", label: "Event latency" },
    },
    {
        key: "analyze",
        icon: "account_tree",
        label: "Analyze",
        tagline: "Match",
        title: "Analysis Layer",
        description: "Events are evaluated against your ruleset using regex matching, metadata inspection, and conditional logic.",
        features: [
            "Regex & glob pattern matching",
            "Size, date & extension filters",
            "Priority-based rule ordering",
            "Chained condition evaluation",
        ],
        stat: { value: "9", label: "Condition types" },
    },
    {
        key: "execute",
        icon: "hub",
        label: "Execute",
        tagline: "Act",
        title: "Execution Layer",
        description: "Matched rules trigger actions through a parallel dispatcher with built-in conflict resolution and rollback.",
        features: [
            "Move, copy, rename & compress",
            "Parallel action execution",
            "Conflict resolution with safe paths",
            "Rollback support on failure",
        ],
        stat: { value: "20+", label: "Actions available" },
    },
    {
        key: "verify",
        icon: "verified",
        label: "Verify",
        tagline: "Log",
        title: "Verification Layer",
        description: "Every action is verified for integrity and permanently logged for audit, transparency and rollback.",
        features: [
            "SHA-256 hash verification",
            "Structured JSON audit logs",
            "Desktop notifications",
            "Full execution history",
        ],
        stat: { value: "99.9%", label: "Reliability" },
    },
];

export default function NeuralFlowSection() {
    const [activeStage, setActiveStage] = useState<number>(0);

    return (
        <section className="py-28 px-8 max-w-screen-2xl mx-auto relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-zinc-500 mb-4">
                    Architecture
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)] mb-4">
                    How Data Flows
                </h3>
                <p className="text-[#9ca3af] max-w-xl text-lg leading-relaxed">
                    A four-stage pipeline that turns raw file system events into verified, automated actions.
                </p>
            </motion.div>

            {/* ── Pipeline Stepper ────── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16"
            >
                {/* Steps row */}
                <div className="flex items-center justify-between max-w-3xl mx-auto">
                    {STAGES.map((stage, i) => {
                        const isActive = activeStage === i;
                        const isPast = activeStage > i;

                        return (
                            <div key={stage.key} className="flex items-center flex-1 last:flex-none">
                                {/* Step node */}
                                <button
                                    onClick={() => setActiveStage(i)}
                                    onMouseEnter={() => setActiveStage(i)}
                                    className="flex flex-col items-center gap-3 relative group"
                                >
                                    {/* Circle */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ease-out"
                                        style={{
                                            borderColor: isActive ? "rgba(255,255,255,0.25)" : isPast ? "rgba(255,255,255,0.1)" : "rgba(51,56,66,0.4)",
                                            background: isActive ? "rgba(255,255,255,0.06)" : "rgba(20,23,29,0.8)",
                                        }}
                                    >
                                        <span
                                            className="material-symbols-outlined transition-all duration-500 ease-out"
                                            style={{
                                                fontSize: "1.25rem",
                                                color: isActive ? "#e5e5e5" : isPast ? "#888" : "rgba(156,163,175,0.3)",
                                            }}
                                        >
                                            {stage.icon}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <div className="flex flex-col items-center">
                                        <span
                                            className="text-[11px] font-mono tracking-[0.2em] uppercase transition-colors duration-500"
                                            style={{ color: isActive ? "#bbb" : "#555" }}
                                        >
                                            {stage.tagline}
                                        </span>
                                        <span
                                            className="text-[13px] font-medium font-[family-name:var(--font-outfit)] transition-colors duration-500"
                                            style={{ color: isActive ? "#e5e5e5" : "#777" }}
                                        >
                                            {stage.label}
                                        </span>
                                    </div>
                                </button>

                                {/* Connector line */}
                                {i < STAGES.length - 1 && (
                                    <div className="flex-1 h-px mx-4 relative" style={{ marginTop: "-28px" }}>
                                        <div className="absolute inset-0 bg-[#252830]" />
                                        <div
                                            className="absolute inset-y-0 left-0 bg-white/15 transition-all duration-700 ease-out"
                                            style={{ width: activeStage > i ? "100%" : "0%" }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* ── Detail Panel ─────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
            >
                {/* Main content */}
                <div className="lg:col-span-3 rounded-2xl border border-[#252830] bg-[#12141a]/80 p-8 lg:p-10 min-h-[280px] relative overflow-hidden">
                    {STAGES.map((stage, i) => (
                        <div
                            key={stage.key}
                            className="transition-all duration-500 ease-out absolute inset-0 p-8 lg:p-10"
                            style={{
                                opacity: activeStage === i ? 1 : 0,
                                transform: activeStage === i ? "translateY(0)" : "translateY(12px)",
                                pointerEvents: activeStage === i ? "auto" : "none",
                            }}
                        >
                            {/* Stage number */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#555]">
                                    Stage {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="w-8 h-px bg-[#333]" />
                            </div>

                            <h4 className="text-2xl font-bold text-[#e5e5e5] font-[family-name:var(--font-outfit)] mb-3">
                                {stage.title}
                            </h4>
                            <p className="text-[15px] text-[#9ca3af] leading-relaxed mb-8">
                                {stage.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3">
                                {stage.features.map((f, fi) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-3 transition-all duration-500"
                                        style={{
                                            opacity: activeStage === i ? 1 : 0,
                                            transform: activeStage === i ? "translateX(0)" : "translateX(-8px)",
                                            transitionDelay: activeStage === i ? `${fi * 60}ms` : "0ms",
                                        }}
                                    >
                                        <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-[#555]" />
                                        <span className="text-[13px] text-[#888]">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Stats sidebar */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                    {STAGES.map((stage, i) => (
                        <button
                            key={stage.key}
                            onClick={() => setActiveStage(i)}
                            className="text-left rounded-xl border p-5 transition-all duration-500 ease-out"
                            style={{
                                borderColor: activeStage === i ? "rgba(255,255,255,0.08)" : "rgba(37,40,48,0.5)",
                                background: activeStage === i ? "rgba(27,31,39,0.8)" : "rgba(18,20,26,0.5)",
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span
                                        className="material-symbols-outlined transition-colors duration-500"
                                        style={{
                                            fontSize: "1.1rem",
                                            color: activeStage === i ? "#ccc" : "#555",
                                        }}
                                    >
                                        {stage.icon}
                                    </span>
                                    <span
                                        className="text-[12px] font-mono uppercase tracking-wider transition-colors duration-500"
                                        style={{ color: activeStage === i ? "#aaa" : "#555" }}
                                    >
                                        {stage.label}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span
                                        className="text-xl font-bold font-[family-name:var(--font-outfit)] transition-colors duration-500"
                                        style={{ color: activeStage === i ? "#e5e5e5" : "#666" }}
                                    >
                                        {stage.stat.value}
                                    </span>
                                    <span className="text-[9px] text-[#555] font-mono tracking-wider ml-1.5 uppercase">
                                        {stage.stat.label}
                                    </span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
