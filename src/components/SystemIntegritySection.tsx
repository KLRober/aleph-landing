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
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

/* -- System Status Panel (left) -- */
function SystemStatusPanel() {
    const stats = [
        { label: "NODE_ALPHA_01", value: "OPERATIONAL", valueColor: "text-[#79FE77]" },
        { label: "CPU_LOAD", value: "12.4%", valueColor: "text-[#e9e9e9]" },
        { label: "THROUGHPUT", value: "1.2 GB/s", valueColor: "text-[#e9e9e9]" },
    ];

    return (
        <motion.div
            variants={cardVariants}
            className="glass-panel rounded-xl p-8 border border-[#444748]/10 lg:col-span-1"
        >
            <h4 className="font-bold text-[#e9e9e9] mb-6 flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                <span className="w-2 h-2 rounded-full bg-[#79FE77]" />
                SYSTEM STATUS
            </h4>

            <div className="space-y-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center pb-4 border-b border-[#444748]/10">
                        <span className="text-xs font-mono text-[#BDCBB6]">{stat.label}</span>
                        <span className={`text-xs font-mono ${stat.valueColor}`}>{stat.value}</span>
                    </div>
                ))}

                {/* Buffer Utilization Bar */}
                <div className="pt-4">
                    <div className="w-full bg-[#0d0e0f] h-1.5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "78%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className="bg-[#79FE77] h-full"
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-[10px] font-mono text-[#BDCBB6]">BUFFER UTILIZATION</span>
                        <span className="text-[10px] font-mono text-[#e9e9e9]">78%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* -- Real-Time Logs Panel (right) -- */
function CoreLogsPanel() {
    const logEntries = [
        { time: "08:42:12.44", level: "INFO", levelColor: "text-[#79FE77]", text: "Initialized handshake with Node: 0x882..." },
        { time: "08:42:12.89", level: "INFO", levelColor: "text-[#79FE77]", text: "AES-256 integrity check completed on payload_pkg_v4.tar.gz" },
        { time: "08:42:13.01", level: "DEBUG", levelColor: "text-cyan-400", text: "Routing traffic via shard-east-04 (latency: 12ms)" },
        { time: "08:42:13.45", level: "INFO", levelColor: "text-[#79FE77]", text: "Successfully scrubbed metadata for 412 local files." },
        { time: "08:42:14.02", level: "WAIT", levelColor: "text-[#cdc5c2]", text: "Awaiting consensus from secondary clusters..." },
    ];

    return (
        <motion.div
            variants={cardVariants}
            className="glass-panel rounded-xl p-8 border border-[#444748]/10 lg:col-span-2 font-mono text-[11px]"
        >
            <h4 className="font-bold text-[#e9e9e9] mb-6 flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                <span className="material-symbols-outlined text-sm">terminal</span>
                CORE_LOGS_STREAM
            </h4>

            <div className="space-y-2 text-[#BDCBB6]">
                {logEntries.map((entry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className={`flex gap-4 ${i === logEntries.length - 1 ? "animate-pulse" : ""}`}
                    >
                        <span className="text-zinc-600">{entry.time}</span>
                        <span className={entry.levelColor}>[{entry.level}]</span>
                        <span>{entry.text}</span>
                    </motion.div>
                ))}
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
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                <SystemStatusPanel />
                <CoreLogsPanel />
            </motion.div>
        </section>
    );
}
