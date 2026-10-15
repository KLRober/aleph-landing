"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useState } from "react";

/* ── Animated terminal-like pipeline visualization ── */
const PIPELINE_LINES = [
    { prefix: "watching", text: "~/Downloads", delay: 0.3, tagStyle: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    { prefix: "detected", text: "report_Q4_final_v2.pdf", delay: 0.8, tagStyle: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
    { prefix: "matched", text: 'rule "PDF → Auto-Compress & Archive"', delay: 1.4, tagStyle: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" },
    { prefix: "action", text: "compress (3.8MB → 1.4MB) + move → /Archive/2026/", delay: 2.0, tagStyle: "text-purple-300 bg-purple-500/10 border-purple-500/20" },
    { prefix: "verified", text: "sha256:9f3a…c7e1 integrity ✓", delay: 2.6, tagStyle: "text-teal-300 bg-teal-500/10 border-teal-500/20" },
    { prefix: "done", text: "Pipeline completed in 47ms (100% offline)", delay: 3.2, tagStyle: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30 font-semibold" },
];

function AnimatedTerminal() {
    const [cycleKey, setCycleKey] = useState(0);
    const [isReplaying, setIsReplaying] = useState(false);

    // Auto-cycle simulation every 7.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCycleKey((prev) => prev + 1);
        }, 7500);
        return () => clearInterval(interval);
    }, []);

    const handleReplay = () => {
        setIsReplaying(true);
        setCycleKey((prev) => prev + 1);
        setTimeout(() => setIsReplaying(false), 600);
    };

    return (
        <div className="w-full rounded-2xl border border-[#252830] bg-[#0c0d10] overflow-hidden shadow-2xl relative group card-hover-glow transition-all duration-500">
            {/* Top ambient glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-24 bg-white/5 blur-3xl pointer-events-none" />

            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1c22] bg-[#0f1115]/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#777] ml-2 flex items-center gap-2">
                        <span>aleph://pipeline-monitor</span>
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    {/* Live pulse indicator */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                            Live 47ms
                        </span>
                    </div>

                    {/* Replay trigger */}
                    <button
                        onClick={handleReplay}
                        title="Replay simulation"
                        className="text-[#666] hover:text-white transition-colors p-1 rounded"
                    >
                        <motion.span
                            animate={{ rotate: isReplaying ? 360 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="material-symbols-outlined text-sm block"
                        >
                            refresh
                        </motion.span>
                    </button>
                </div>
            </div>

            {/* Terminal body */}
            <div key={cycleKey} className="p-5 md:p-6 space-y-2.5 font-mono text-[13px] min-h-[225px] relative">
                {PIPELINE_LINES.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.35,
                            delay: line.delay,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex items-center gap-2.5 p-1 rounded hover:bg-white/[0.03] transition-colors"
                    >
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${line.tagStyle}`}>
                            {line.prefix}
                        </span>
                        <span className="text-[#cbd5e1] truncate">{line.text}</span>
                    </motion.div>
                ))}

                {/* Blinking cursor & status prompt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.6 }}
                    className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5"
                >
                    <span className="text-emerald-400 font-semibold text-xs">aleph &gt;</span>
                    <span className="text-xs text-[#666]">waiting for next file event</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="w-2 h-4 bg-emerald-400 inline-block rounded-xs"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default function HeroSection() {
    const { scrollY } = useScroll();
    const terminalY = useTransform(scrollY, [0, 600], [0, 35]);
    const terminalScale = useTransform(scrollY, [0, 600], [1, 0.98]);

    return (
        <>
            <section className="relative min-h-[90vh] flex items-center px-8 md:px-16 max-w-screen-2xl mx-auto pt-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="z-10"
                    >
                        {/* Platform Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-[#141618]/90 border border-[#333842]/60 rounded-full px-4 py-1.5 mb-8 animate-float-gentle backdrop-blur-md shadow-lg"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-radar-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-xs font-mono text-[#cbd5e1] tracking-wider uppercase font-medium">
                                Free & Open Source — Windows 10/11
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#e9e9e9] leading-[0.9] mb-8 font-[family-name:var(--font-outfit)]"
                        >
                            Your Files.{" "}
                            <span className="animate-text-shimmer font-black">
                                Your Rules.
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-xl text-[#9ca3af] max-w-xl mb-10 leading-relaxed"
                        >
                            Open-source file automation for Windows. Set rules, ALEPH handles the rest — offline, private, zero cloud latency.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="accent-button glow-button px-8 py-4 font-bold tracking-tight rounded-xl flex items-center gap-3 text-[#0f1115] shadow-xl group cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-y-0.5">
                                    download
                                </span>
                                Download Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03, y: -1, backgroundColor: "rgba(37,40,48,1)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="bg-[#1c1e22] border border-[#333842]/60 text-[#e8e6e3] px-8 py-4 font-bold tracking-tight rounded-xl transition-colors flex items-center gap-3 shadow-lg cursor-pointer hover:border-zinc-500/50"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                View on GitHub
                            </motion.button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex items-center gap-6 mt-10 text-xs text-[#666] font-mono"
                        >
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-zinc-500 text-sm">lock</span>
                                100% Local
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-zinc-500 text-sm">code</span>
                                Open Source
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-zinc-500 text-sm">wifi_off</span>
                                Offline Ready
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right — Animated Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ y: terminalY, scale: terminalScale }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <AnimatedTerminal />
                    </motion.div>
                </div>
            </section>

            {/* Section Connector */}
            <div className="h-16 w-full flex flex-col items-center justify-center opacity-20">
                <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
            </div>
        </>
    );
}
