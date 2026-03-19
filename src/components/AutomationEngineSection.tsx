"use client";

import { motion } from "framer-motion";

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
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/* -- Automation Engine card (wide) -- */
function AutomationCard() {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 lg:p-8 flex flex-col gap-4 flex-[1.5]"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[16px] text-green-400">
                            hub
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        Automation Engine
                    </h3>
                </div>
                <span className="text-[9px] font-mono text-green-500/60 tracking-wider uppercase px-2 py-0.5 border border-green-500/20 rounded-full">
                    Advanced
                </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
                Deploy complex If/Then logic flows to manage incoming data streams
                without manual intervention.
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mt-2">
                {["IF_FILE_EXT", "THEN_CLASSIFY_MOVE", "STORE_SMART"].map((tag) => (
                    <span
                        key={tag}
                        className="text-[9px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.04] text-zinc-400 tracking-wider"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* -- AES-256 Cleaning card (small) -- */
function AESCleaningCard() {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 lg:p-8 flex flex-col gap-4 flex-1"
        >
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/[0.06] flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-zinc-300">
                    shield
                </span>
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
                AES-256 Cleaning
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
                Metadata scrub on every save. Total privacy at rest.
            </p>
        </motion.div>
    );
}

/* -- Folder Diagnostics card -- */
function FolderDiagnosticsCard() {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 flex flex-col gap-4 flex-1"
        >
            <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-tight">
                    Folder Diagnostics
                </h3>
                <span className="text-[8px] font-mono bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full tracking-wider uppercase flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    Live
                </span>
            </div>
            <div className="mt-auto">
                <div className="flex justify-between text-[10px] font-mono tracking-wider uppercase mb-2">
                    <span className="text-zinc-500">File Health Index</span>
                    <span className="text-red-400 font-bold">85%</span>
                </div>
                <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-red-400"
                    />
                </div>
            </div>
        </motion.div>
    );
}

/* -- Toolkit Integration card -- */
function ToolkitCard() {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 flex flex-col gap-4 flex-[1.5]"
        >
            <h3 className="text-base font-bold text-white tracking-tight">
                Toolkit Integration
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
                Native PDF processing and RAW image optimization baked directly into the
                filesystem kernel.
            </p>
            <div className="flex gap-2 mt-auto">
                {["FFMPEG", "MAGICK", "DOCAX"].map((tool) => (
                    <span
                        key={tool}
                        className="text-[10px] font-mono px-3 py-1.5 rounded-md bg-zinc-900 border border-green-500/10 text-green-400/70 tracking-wider"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function BentoGrid() {
    return (
        <section id="infrastructure" className="px-4 max-w-5xl mx-auto w-full mt-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col gap-4"
            >
                {/* Row 1: Automation (wide) + AES-256 */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <AutomationCard />
                    <AESCleaningCard />
                </div>

                {/* Row 2: Folder Diagnostics + Toolkit */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <FolderDiagnosticsCard />
                    <ToolkitCard />
                </div>
            </motion.div>
        </section>
    );
}
