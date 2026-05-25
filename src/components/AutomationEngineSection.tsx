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
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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
                    className="md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-10 border border-[#333842]/30 flex flex-col justify-between card-hover-glow group"
                >
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-white text-2xl">
                                speed
                            </span>
                        </div>
                        <h4 className="text-3xl font-bold text-[#e9e9e9] mb-4 font-[family-name:var(--font-outfit)]">
                            Automation Engine
                        </h4>
                        <p className="text-[#9ca3af] leading-relaxed">
                            Create intelligent rules with Trigger → Condition → Action. ALEPH watches your folders and executes chained pipelines automatically — compress, move, rename, notify, and more.
                        </p>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-xl bg-[#08090b] aspect-video relative border border-[#333842]/20">
                        <Image
                            src="/pipeline-visual.png"
                            alt="Pipeline visualization showing Trigger, Condition, and Action nodes connected by luminous data streams"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                {/* Medium Feature — AES-256 Scrubbing */}
                <motion.div
                    variants={cardVariants}
                    className="md:col-span-2 glass-panel rounded-2xl p-10 border border-[#333842]/30 flex items-center gap-8 card-hover-glow group"
                >
                    <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                            Privacy Vault
                        </h4>
                        <p className="text-sm text-[#9ca3af]">
                            Strip EXIF/GPS metadata, encrypt with AES-256, and securely shred files with DoD 5220.22-M multi-pass overwrite.
                        </p>
                    </div>
                    <div className="w-24 h-24 rounded-xl bg-[#0d0e10] border border-[#333842]/30 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors">
                        <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            security
                        </span>
                    </div>
                </motion.div>

                {/* Small Feature 1 — Diagnostics */}
                <motion.div
                    variants={cardVariants}
                    className="glass-panel rounded-2xl p-8 border border-[#333842]/30 card-hover-glow"
                >
                    <div className="w-10 h-10 rounded-lg bg-[#9ca3af]/10 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-[#9ca3af] text-xl">
                            analytics
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                        Dashboard
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Real-time metrics: files processed, disk savings, active rules, Security Health Score, and activity feed.
                    </p>
                </motion.div>

                {/* Small Feature 2 — Toolkit */}
                <motion.div
                    variants={cardVariants}
                    className="glass-panel rounded-2xl p-8 border border-[#333842]/30 card-hover-glow"
                >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-white text-xl">
                            integration_instructions
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                        File Optimizer
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Smart file explorer with duplicate detection, disk usage treemap, metadata inspector, and auto-organization.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
