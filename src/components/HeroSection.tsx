"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <>
            <section className="relative min-h-[90vh] flex items-center px-8 md:px-16 max-w-screen-2xl mx-auto pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="z-10"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2a2a] border border-[#444748]/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#C0C0C0] animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest uppercase text-[#B0B0B0]">
                                System Status: V1.0.4 Live
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#e9e9e9] leading-[0.9] mb-8 font-[family-name:var(--font-space-grotesk)]">
                            WELCOME TO{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#C0C0C0]">
                                ALEPH
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-[#B0B0B0] max-w-xl mb-12 leading-relaxed font-light">
                            The high-performance automation engine for local-first file control. Precise, silent, and authoritative.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="glow-button bg-[#C0C0C0] text-[#0a0a0a] px-8 py-4 font-bold tracking-tight rounded-lg transition-all flex items-center gap-3"
                            >
                                INITIALIZE NODE
                                <span className="material-symbols-outlined">terminal</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(58, 57, 57, 1)" }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#353434] border border-[#444748]/30 text-[#e9e9e9] px-8 py-4 font-bold tracking-tight rounded-lg transition-all"
                            >
                                READ MANIFESTO
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Graphic — ℵ Symbol with Spinning Rings */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative aspect-square flex items-center justify-center"
                    >
                        {/* Ambient glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#C0C0C0]/10 via-zinc-500/5 to-transparent rounded-full blur-[120px]" />

                        <div className="relative group">
                            {/* Giant ℵ Symbol */}
                            <div className="text-[22rem] font-bold text-zinc-900/40 select-none transition-transform duration-1000 group-hover:rotate-6 font-[family-name:var(--font-space-grotesk)]">
                                ℵ
                            </div>

                            {/* Concentric Rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 border border-[#C0C0C0]/30 rounded-full animate-spin-slow" />
                                <div className="absolute w-80 h-80 border-[0.5px] border-zinc-500/20 rounded-full animate-spin-slow-reverse" />
                                <svg className="absolute w-96 h-96 opacity-60" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="48"
                                        fill="none"
                                        stroke="url(#neon-grad)"
                                        strokeDasharray="1 5"
                                        strokeWidth="0.1"
                                    />
                                    <defs>
                                        <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: "#C0C0C0", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "#888888", stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Neural Flow Connector */}
            <div className="h-32 w-full flex flex-col items-center justify-center opacity-40">
                <div className="w-px h-full bg-gradient-to-b from-[#C0C0C0] to-transparent" />
            </div>
        </>
    );
}
