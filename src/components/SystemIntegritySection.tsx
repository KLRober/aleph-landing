"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

function AnimatedPercent({ target, suffix = "%" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1200;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Number(current.toFixed(1)));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-3xl md:text-4xl font-bold text-white stat-glow tabular-nums">
            {count}{suffix}
        </span>
    );
}

/* -- System Integrity (left) -- */
function IntegrityCard() {
    return (
        <motion.div
            variants={cardVariants}
            className="bento-card p-6 lg:p-8 flex flex-col gap-6 flex-1"
        >
            <h3 className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase">
                System Integrity
            </h3>

            {/* Disk Efficiency */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
                        Disk Efficiency
                    </span>
                    <AnimatedPercent target={99.8} />
                </div>
                <div className="ml-auto">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center integrity-ring-green">
                        <span className="material-symbols-outlined text-[20px] text-green-400">
                            check_circle
                        </span>
                    </div>
                </div>
            </div>

            {/* CPU Overhead */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
                        CPU Overhead
                    </span>
                    <AnimatedPercent target={1.2} />
                </div>
                <div className="ml-auto">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center integrity-ring-pink">
                        <span className="material-symbols-outlined text-[20px] text-pink-400">
                            speed
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* -- Real-Time Activity Log (right) -- */
function ActivityLogCard() {
    const logEntries = [
        { type: "info", tag: "INFO", text: "2024-05-21 14:02:11 - Neural engine initialized successfully.", color: "log-info" },
        { type: "success", tag: "SUCCESS", text: "Indexing 1.2GB folder content successfully.", color: "log-success" },
        { type: "process", tag: "PROCESS", text: "Scanning 1,422 files in root directory /users/aleph/desktop...", color: "log-process" },
        { type: "security", tag: "SECURITY", text: "Cleaned EXIF data from IMG_0442.JPG (Location: Hidden).", color: "log-security" },
        { type: "logic", tag: "LOGIC", text: "If/Then trigger activated: \"Project_X_Move\".", color: "log-logic" },
        { type: "warn", tag: "WARN", text: "Node_04 reported 0.01ms spike. Auto-balancing load.", color: "log-warn" },
        { type: "success", tag: "SUCCESS", text: "14 PDF files merged and optimized (Saved 244MB).", color: "log-success" },
        { type: "process", tag: "PROCESS", text: "Encryption cycle completed for folder \"Confidential\".", color: "log-process" },
        { type: "info", tag: "INFO", text: "System integrity check 100%.", color: "log-info" },
    ];

    return (
        <motion.div
            variants={cardVariants}
            className="terminal-log flex flex-col flex-[1.5] overflow-hidden"
        >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04]">
                <h3 className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] uppercase">
                    Real-Time Activity Log
                </h3>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            </div>

            {/* Log entries */}
            <div className="p-5 flex flex-col gap-1 text-[11px] font-mono leading-relaxed max-h-[300px] overflow-y-auto">
                {logEntries.map((entry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className="flex gap-2"
                    >
                        <span className={entry.color}>
                            [{entry.tag}]
                        </span>
                        <span className="text-zinc-500">{entry.text}</span>
                    </motion.div>
                ))}
            </div>

            {/* Action buttons */}
            <div className="px-5 py-3 border-t border-white/[0.04] flex gap-3">
                <button className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase px-3 py-1.5 rounded-md border border-white/[0.06] hover:border-white/[0.12] hover:text-zinc-300 transition-colors">
                    Raw Log
                </button>
                <button className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase px-3 py-1.5 rounded-md border border-white/[0.06] hover:border-white/[0.12] hover:text-zinc-300 transition-colors">
                    History
                </button>
            </div>
        </motion.div>
    );
}

export default function SystemIntegritySection() {
    return (
        <section className="px-4 max-w-5xl mx-auto w-full mt-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col lg:flex-row gap-4"
            >
                <IntegrityCard />
                <ActivityLogCard />
            </motion.div>
        </section>
    );
}
