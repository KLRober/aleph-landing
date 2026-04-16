"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export default function BentoGrid() {
    return (
        <section id="infrastructure" className="py-24 px-8 max-w-screen-2xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:min-h-[600px]"
            >
                {/* Large Feature — 2×2 */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ borderColor: "rgba(68, 71, 72, 0.3)" }}
                    className="md:col-span-2 md:row-span-2 glass-panel rounded-xl p-10 border border-[#444748]/10 flex flex-col justify-between hover:bg-[#2a2a2a] transition-all group"
                >
                    <div>
                        <span className="material-symbols-outlined text-[#C0C0C0] text-4xl mb-6 block">
                            speed
                        </span>
                        <h4 className="text-3xl font-bold text-[#e9e9e9] mb-4 font-[family-name:var(--font-space-grotesk)]">
                            Automation Engine
                        </h4>
                        <p className="text-[#B0B0B0] leading-relaxed">
                            Create intelligent rules with Trigger → Condition → Action. ALEPH watches your folders and executes chained pipelines automatically — compress, move, rename, notify, and more.
                        </p>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-lg bg-[#0d0e0f] aspect-video relative">
                        <Image
                            src="/bento-hero.webp"
                            alt="Abstract 3D digital block visualization"
                            fill
                            className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>

                {/* Medium Feature — AES-256 Scrubbing */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ borderColor: "rgba(68, 71, 72, 0.3)" }}
                    className="md:col-span-2 glass-panel rounded-xl p-10 border border-[#444748]/10 flex items-center gap-8 hover:bg-[#2a2a2a] transition-all group"
                >
                    <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-space-grotesk)]">
                            Privacy Vault
                        </h4>
                        <p className="text-sm text-[#B0B0B0]">
                            Strip EXIF/GPS metadata, encrypt with AES-256, and securely shred files with DoD 5220.22-M multi-pass overwrite.
                        </p>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-[#0d0e0f] border border-[#444748]/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[#e9e9e9] text-3xl group-hover:rotate-12 transition-transform">
                            security
                        </span>
                    </div>
                </motion.div>

                {/* Small Feature 1 — Diagnostics */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ borderColor: "rgba(68, 71, 72, 0.3)" }}
                    className="glass-panel rounded-xl p-8 border border-[#444748]/10 hover:bg-[#2a2a2a] transition-all"
                >
                    <span className="material-symbols-outlined text-[#C0C0C0] mb-4 block">
                        analytics
                    </span>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-space-grotesk)]">
                        Dashboard
                    </h4>
                    <p className="text-xs text-[#B0B0B0]">
                        Real-time metrics: files processed, disk savings, active rules, Security Health Score, and activity feed.
                    </p>
                </motion.div>

                {/* Small Feature 2 — Toolkit */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ borderColor: "rgba(68, 71, 72, 0.3)" }}
                    className="glass-panel rounded-xl p-8 border border-[#444748]/10 hover:bg-[#2a2a2a] transition-all"
                >
                    <span className="material-symbols-outlined text-zinc-300 mb-4 block">
                        integration_instructions
                    </span>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-space-grotesk)]">
                        File Optimizer
                    </h4>
                    <p className="text-xs text-[#B0B0B0]">
                        Smart file explorer with duplicate detection, disk usage treemap, metadata inspector, and auto-organization.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
