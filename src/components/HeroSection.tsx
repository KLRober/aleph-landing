"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/* ── Animated terminal-like pipeline visualization ── */
const PIPELINE_LINES = [
    { prefix: "watching", text: "~/Downloads", delay: 0.6 },
    { prefix: "detected", text: "report_Q4_final_v2.pdf", delay: 1.2 },
    { prefix: "matched", text: 'rule "PDF → Archive"', delay: 1.8 },
    { prefix: "action", text: "compress + move → /Documents/Archive/2026/", delay: 2.4 },
    { prefix: "verified", text: "sha256:9f3a…c7e1 ✓", delay: 3.0 },
    { prefix: "done", text: "1 file processed in 47ms", delay: 3.6 },
];

function AnimatedTerminal() {
    return (
        <div className="w-full rounded-xl border border-[#252830] bg-[#0c0d10] overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1c22]">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                </div>
                <span className="text-[10px] font-mono text-[#555] ml-2">aleph — pipeline</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 space-y-2 font-mono text-[13px] min-h-[200px]">
                {PIPELINE_LINES.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: line.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex gap-2"
                    >
                        <span className={`shrink-0 ${
                            line.prefix === "done" ? "text-[#6b7280]" :
                            line.prefix === "verified" ? "text-[#6b7280]" :
                            "text-[#4b5563]"
                        }`}>
                            [{line.prefix}]
                        </span>
                        <span className="text-[#9ca3af]">{line.text}</span>
                    </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2 }}
                    className="flex items-center gap-1 mt-2"
                >
                    <span className="text-[#4b5563]">→</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="w-2 h-4 bg-[#555] inline-block"
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
                            className="inline-flex items-center gap-2 bg-[#141618] border border-[#333842]/50 rounded-full px-4 py-1.5 mb-8"
                        >
                            <span className="text-xs font-mono text-[#9ca3af] tracking-wider uppercase">
                                Free & Open Source — Windows
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
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
                            Open-source file automation for Windows. Set rules, ALEPH handles the rest — offline, private, no cloud.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="accent-button glow-button px-8 py-4 font-bold tracking-tight rounded-xl flex items-center gap-3 text-[#0f1115]"
                            >
                                <span className="material-symbols-outlined text-xl">download</span>
                                Download
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(37,40,48,1)" }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#1c1e22] border border-[#333842]/50 text-[#e8e6e3] px-8 py-4 font-bold tracking-tight rounded-xl transition-colors flex items-center gap-3"
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
