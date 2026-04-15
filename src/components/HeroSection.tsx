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
                        {/* Headline */}
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#e9e9e9] leading-[0.9] mb-8 font-[family-name:var(--font-space-grotesk)]">
                            WELCOME TO{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#888888]">
                                ALEPH
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-[#B0B0B0] max-w-xl mb-12 leading-relaxed font-light">
                            The high-performance automation engine for local-first file control.
                            Precise, silent, and authoritative.
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

                    {/* Right — ℵ Symbol, no rings */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative aspect-square flex items-center justify-center"
                    >
                        <div className="aleph-widget-hero">
                            {/* Just the symbol + glow, no circular rings */}
                            <span className="aleph-widget-symbol-hero font-[family-name:var(--font-space-grotesk)]">
                                ℵ
                            </span>
                            <div className="aleph-widget-glow-hero" />
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
