"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

/* -- System Overview Panel (left) -- */
function SystemStatusPanel() {
    const stats = [
        { label: "Background service", value: "Running smoothly", valueColor: "text-zinc-200" },
        { label: "Enabled rules", value: "7 of 10 running", valueColor: "text-[#e9e9e9]" },
        { label: "Files organized today", value: "1,247", valueColor: "text-[#e9e9e9]" },
    ];

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-8 border border-[#333842]/30 lg:col-span-1 transition-all duration-300"
        >
            <h4 className="font-bold text-[#e9e9e9] mb-6 flex items-center gap-3 font-[family-name:var(--font-outfit)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 status-dot-pulse" />
                Live Overview
            </h4>

            <div className="space-y-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center pb-4 border-b border-[#333842]/20">
                        <span className="text-xs font-mono text-[#9ca3af]">{stat.label}</span>
                        <span className={`text-xs font-mono ${stat.valueColor}`}>{stat.value}</span>
                    </div>
                ))}

                {/* Storage Reclaimed Progress Bar */}
                <div className="pt-4">
                    <div className="w-full bg-[#08090b] h-2 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "64%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))" }}
                        />
                    </div>
                    <div className="flex justify-between mt-2.5">
                        <span className="text-[11px] font-mono text-[#9ca3af]">Storage reclaimed</span>
                        <span className="text-[11px] font-mono text-[#e9e9e9] font-medium">2.4 GB saved</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* -- Real-Time Activity Panel (right) -- */
function CoreLogsPanel() {
    const logEntries = [
        {
            time: "14:32:07",
            tag: "Organized",
            tagStyle: "text-zinc-200 bg-white/10 border-white/15",
            text: "invoice_march.pdf moved to /Archive/2026 via 'Receipts' rule",
        },
        {
            time: "14:32:07",
            tag: "Compressed",
            tagStyle: "text-zinc-300 bg-white/5 border-white/10",
            text: "Shrank attachment by 64% without losing visual clarity",
        },
        {
            time: "14:32:08",
            tag: "Detected",
            tagStyle: "text-zinc-400 bg-white/5 border-white/10",
            text: "New file downloaded in ~/Downloads — waiting for write to complete",
        },
        {
            time: "14:32:09",
            tag: "Cleaned",
            tagStyle: "text-zinc-300 bg-white/10 border-white/15",
            text: "Removed GPS location and camera EXIF metadata from IMG_2847.jpg",
        },
        {
            time: "14:32:10",
            tag: "Backed up",
            tagStyle: "text-zinc-200 bg-white/10 border-white/15",
            text: "14 files (847 MB) mirrored to local encrypted backup vault",
        },
    ];

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-8 border border-[#333842]/30 lg:col-span-2 font-mono text-[12px] transition-all duration-300"
        >
            <h4 className="font-bold text-[#e9e9e9] mb-6 flex items-center gap-3 font-[family-name:var(--font-outfit)] text-base">
                <span className="material-symbols-outlined text-sm text-zinc-400">schedule</span>
                Recent Activity
            </h4>

            <div className="space-y-3 text-[#9ca3af]">
                {logEntries.map((entry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap sm:flex-nowrap items-center gap-3 py-1 border-b border-[#333842]/10 last:border-0"
                    >
                        <span className="text-[#555] shrink-0 text-[11px]">{entry.time}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded border ${entry.tagStyle} shrink-0`}>
                            {entry.tag}
                        </span>
                        <span className="flex-1 text-[#bbb]">{entry.text}</span>
                    </motion.div>
                ))}
                {/* Live listening indicator */}
                <div className="flex items-center gap-3 pt-2 text-[11px]">
                    <span className="text-[#555]">14:32:11</span>
                    <span className="text-[10px] px-2 py-0.5 rounded text-zinc-400 bg-white/5 border border-white/10">
                        Standby
                    </span>
                    <span className="typing-cursor text-[#777]">Monitoring folders for changes…</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function SystemIntegritySection() {
    return (
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
                <SystemStatusPanel />
                <CoreLogsPanel />
            </motion.div>
        </section>
    );
}
