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
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-[#0f1115] to-zinc-500/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.015),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.01),transparent_50%)]" />

                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10" />

                {/* Content */}
                <div className="relative z-10 text-center py-20 px-8">
                    {/* Decorative symbol */}
                    <div className="text-6xl mb-6 font-[family-name:var(--font-outfit)]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/15 to-zinc-500/15">ℵ</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-[#e9e9e9] mb-6 font-[family-name:var(--font-outfit)]">
                        Ready to take control?
                    </h2>
                    <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto mb-10">
                        Stop managing files manually. Let ALEPH compress your PDFs, organize your downloads, strip your metadata, and back up your work — all on autopilot, all on your machine.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="accent-button glow-button px-10 py-4 font-bold tracking-tight rounded-xl flex items-center gap-3 text-lg"
                        >
                            <span className="material-symbols-outlined">download</span>
                            Download Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03, backgroundColor: "rgba(37,40,48,1)" }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#1c1e22] border border-[#333842]/40 text-[#e9e9e9] px-10 py-4 font-bold tracking-tight rounded-xl transition-colors flex items-center gap-3 text-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            View on GitHub
                        </motion.button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-mono text-[#9ca3af] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-500 text-sm">code</span>
                            100% Open Source
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-500 text-sm">lock</span>
                            100% Offline
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-500 text-sm">speed</span>
                            Windows 10 & 11
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
