"use client";

import { motion } from "framer-motion";

export default function PrivacyBanner() {
    return (
        <section id="security" className="px-4 max-w-5xl mx-auto w-full mt-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bento-card relative overflow-hidden py-16 px-8 text-center flex flex-col items-center"
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

                {/* Shield icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-white/[0.06] flex items-center justify-center mb-6"
                >
                    <span className="material-symbols-outlined text-[22px] text-green-400">
                        lock
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight relative z-10"
                >
                    Tus archivos no son nuestra mercancía.{" "}
                    <span className="gradient-text-emerald">100% Local.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xs font-mono text-zinc-500 mt-5 tracking-[0.15em] uppercase relative z-10"
                >
                    Zero Cloud Connection &bull; Zero Telemetry &bull; Zero Data Harvesting
                </motion.p>
            </motion.div>
        </section>
    );
}
