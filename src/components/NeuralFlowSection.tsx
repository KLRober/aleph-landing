"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
        title: "Folder monitoring",
        description: "File events are caught instantly through native folder watchers with sub-millisecond response.",
        features: [
            "Recursive folder watching",
            "Create, modify, delete & rename events",
            "Debounced event queue to prevent duplicates",
            "Zero polling, completely event-driven",
        ],
        stat: { value: "<1ms", label: "Event latency" },
    },
    {
        key: "analyze",
        icon: "account_tree",
        label: "Analyze",
        tagline: "Match",
        title: "Rule matching",
        description: "Events are matched against your rules using pattern matching, file metadata, and condition chains.",
        features: [
            "Regex & glob pattern matching",
            "Size, date & extension filters",
            "Custom rule priorities",
            "Chained condition evaluation",
        ],
        stat: { value: "9", label: "Condition types" },
    },
    {
        key: "execute",
        icon: "hub",
        label: "Execute",
        tagline: "Act",
        title: "Automated execution",
        description: "Matched rules trigger actions through a safe dispatcher with conflict resolution and rollback support.",
        features: [
            "Move, copy, rename & compress",
            "Parallel action execution",
            "Conflict resolution with safe auto-rename",
            "Rollback support on failure",
        ],
        stat: { value: "20+", label: "Actions available" },
    },
    {
        key: "verify",
        icon: "verified",
        label: "Verify",
        tagline: "Log",
        title: "Integrity & history",
        description: "Every action is checked for file integrity and saved in a private local history log.",
        features: [
            "SHA-256 hash checks",
            "Clean local audit log",
            "Desktop notifications",
            "Full execution history",
        ],
        stat: { value: "99.9%", label: "Reliability" },
    },
];

export default function NeuralFlowSection() {
    const [activeStage, setActiveStage] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // Auto-advance stages every 5.5s unless paused by user interaction
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveStage((prev) => (prev + 1) % STAGES.length);
        }, 5500);
        return () => clearInterval(interval);
    }, [isPaused]);

    const currentStage = STAGES[activeStage];

    return (
        <section
            className="py-28 px-8 max-w-screen-2xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-500">
                        Architecture
                    </span>
                    <span className="text-zinc-700 font-mono text-xs">/</span>
                    <span className="text-xs font-mono text-emerald-400/90 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Interactive
                    </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)] mb-4">
                    Under the hood
                </h3>
                <p className="text-[#9ca3af] max-w-xl text-lg leading-relaxed">
                    Every file event passes through four stages before anything touches your disk. Hover or click to inspect any stage.
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
                                    onClick={() => {
                                        setActiveStage(i);
                                        setIsPaused(true);
                                    }}
                                    className="flex flex-col items-center gap-3 relative group cursor-pointer focus:outline-none"
                                >
                                    {/* Circle Container */}
                                    <div className="relative">
                                        {/* Glowing halo for active node */}
                                        {isActive && (
                                            <span className="absolute -inset-1 rounded-2xl bg-white/10 blur-sm animate-pulse-soft" />
                                        )}

                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 relative z-10"
                                            style={{
                                                borderColor: isActive
                                                    ? "rgba(255,255,255,0.4)"
                                                    : isPast
                                                    ? "rgba(255,255,255,0.15)"
                                                    : "rgba(51,56,66,0.4)",
                                                background: isActive
                                                    ? "rgba(255,255,255,0.08)"
                                                    : "rgba(20,23,29,0.8)",
                                                boxShadow: isActive
                                                    ? "0 0 25px rgba(255,255,255,0.1)"
                                                    : "none",
                                            }}
                                        >
                                            <span
                                                className="material-symbols-outlined transition-all duration-300"
                                                style={{
                                                    fontSize: "1.3rem",
                                                    color: isActive ? "#ffffff" : isPast ? "#9ca3af" : "rgba(156,163,175,0.3)",
                                                }}
                                            >
                                                {stage.icon}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <div className="flex flex-col items-center">
                                        <span
                                            className="text-[11px] font-mono tracking-[0.2em] uppercase transition-colors duration-300"
                                            style={{ color: isActive ? "#cbd5e1" : "#555" }}
                                        >
                                            {stage.tagline}
                                        </span>
                                        <span
                                            className="text-[13px] font-medium font-[family-name:var(--font-outfit)] transition-colors duration-300"
                                            style={{ color: isActive ? "#ffffff" : "#777" }}
                                        >
                                            {stage.label}
                                        </span>
                                    </div>
                                </button>

                                {/* Connector line */}
                                {i < STAGES.length - 1 && (
                                    <div className="flex-1 h-0.5 mx-4 relative overflow-hidden" style={{ marginTop: "-28px" }}>
                                        {/* Background track */}
                                        <div className="absolute inset-0 bg-[#252830]" />

                                        {/* Filled completed line */}
                                        <div
                                            className="absolute inset-y-0 left-0 bg-white/20 transition-all duration-500 ease-out"
                                            style={{ width: activeStage > i ? "100%" : "0%" }}
                                        />

                                        {/* Animated active energy packet traveling along wire */}
                                        {activeStage === i && (
                                            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-beam-slide" />
                                        )}
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
                {/* Main content with AnimatePresence */}
                <div className="lg:col-span-3 rounded-2xl border border-[#252830] bg-[#12141a]/90 backdrop-blur-md p-8 lg:p-10 min-h-[320px] relative overflow-hidden shadow-2xl flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStage.key}
                            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full"
                        >
                            {/* Stage number */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-400 font-semibold bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                    Stage 0{activeStage + 1} / 04
                                </span>
                                <div className="w-12 h-px bg-white/10" />
                                <span className="text-xs font-mono text-[#777] uppercase tracking-wider">
                                    {currentStage.tagline} Phase
                                </span>
                            </div>

                            <h4 className="text-2xl lg:text-3xl font-bold text-[#f1f5f9] font-[family-name:var(--font-outfit)] mb-3">
                                {currentStage.title}
                            </h4>
                            <p className="text-[15px] text-[#9ca3af] leading-relaxed mb-6">
                                {currentStage.description}
                            </p>

                            {/* Features list */}
                            <ul className="space-y-2.5">
                                {currentStage.features.map((f, fi) => (
                                    <motion.li
                                        key={f}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: fi * 0.05 }}
                                        className="flex items-center gap-3 text-[13px] text-[#cbd5e1]"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                        <span>{f}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress indicator bar at bottom of panel */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-6">
                        <motion.div
                            key={activeStage}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5.5, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-zinc-500 to-white"
                        />
                    </div>
                </div>

                {/* Stats sidebar */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {STAGES.map((stage, i) => {
                        const isSelected = activeStage === i;
                        return (
                            <button
                                key={stage.key}
                                onClick={() => {
                                    setActiveStage(i);
                                    setIsPaused(true);
                                }}
                                className={`text-left rounded-xl border p-5 transition-all duration-300 relative cursor-pointer group ${
                                    isSelected
                                        ? "border-white/30 bg-[#1b1f27] shadow-lg"
                                        : "border-[#252830] bg-[#12141a]/60 hover:border-zinc-500/40 hover:bg-[#151820]"
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                                isSelected ? "bg-white/10 text-white" : "bg-white/5 text-[#777] group-hover:text-zinc-300"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-base">
                                                {stage.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#777] block">
                                                {stage.tagline}
                                            </span>
                                            <span
                                                className={`text-sm font-semibold font-[family-name:var(--font-outfit)] transition-colors ${
                                                    isSelected ? "text-white" : "text-[#9ca3af] group-hover:text-zinc-200"
                                                }`}
                                            >
                                                {stage.label}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className={`text-xl font-bold font-[family-name:var(--font-outfit)] block ${
                                                isSelected ? "text-white" : "text-zinc-500"
                                            }`}
                                        >
                                            {stage.stat.value}
                                        </span>
                                        <span className="text-[9px] text-[#555] font-mono tracking-wider ml-1.5 uppercase">
                                            {stage.stat.label}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
