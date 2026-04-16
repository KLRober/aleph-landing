"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden"
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 via-[#0d0e0f] to-zinc-500/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,192,192,0.06),transparent_60%)]" />

                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-[#C0C0C0]/20" />

                {/* Content */}
                <div className="relative z-10 text-center py-20 px-8">
                    {/* Decorative symbol */}
                    <div className="text-6xl text-[#C0C0C0]/20 mb-6 font-[family-name:var(--font-space-grotesk)]">
                        ℵ
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-[#e9e9e9] mb-6 font-[family-name:var(--font-space-grotesk)]">
                        Ready to take control?
                    </h2>
                    <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto mb-10">
                        Stop managing files manually. Let ALEPH compress your PDFs, organize your downloads, strip your metadata, and back up your work — all on autopilot, all on your machine.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="glow-button bg-[#C0C0C0] text-[#0a0a0a] px-10 py-4 font-bold tracking-tight rounded-lg transition-all flex items-center gap-3 text-lg"
                        >
                            <span className="material-symbols-outlined">download</span>
                            Download for Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03, backgroundColor: "rgba(58, 57, 57, 1)" }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#353434] border border-[#444748]/30 text-[#e9e9e9] px-10 py-4 font-bold tracking-tight rounded-lg transition-all flex items-center gap-3 text-lg"
                        >
                            <span className="material-symbols-outlined">description</span>
                            View Documentation
                        </motion.button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-sm">verified</span>
                            Free plan available
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-sm">lock</span>
                            100% offline
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-sm">speed</span>
                            Windows 10 & 11
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
