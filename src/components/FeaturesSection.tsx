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
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const features = [
    {
        icon: "bolt",
        title: "Lightning Fast",
        description:
            "Sub-millisecond file event detection with reactive watchers. No polling, no delays — pure event-driven throughput.",
        color: "text-[#79FE77]",
    },
    {
        icon: "lock",
        title: "Privacy-First",
        description:
            "Everything runs locally on your machine. Zero cloud dependencies, zero data leaks. Your files never leave your disk.",
        color: "text-cyan-400",
    },
    {
        icon: "auto_fix_high",
        title: "Smart Rules Engine",
        description:
            "Define complex automation rules with conditions, triggers, and actions. Regex support, date filters, size thresholds.",
        color: "text-[#79FE77]",
    },
    {
        icon: "schedule",
        title: "Scheduled Tasks",
        description:
            "Set up recurring automations with cron-like scheduling. Daily cleanup, weekly backups, monthly archiving.",
        color: "text-cyan-400",
    },
    {
        icon: "monitoring",
        title: "Real-Time Dashboard",
        description:
            "Live monitoring of all active rules, file events, and system metrics. Beautiful charts and actionable insights.",
        color: "text-[#79FE77]",
    },
    {
        icon: "settings_suggest",
        title: "Extensible Toolkit",
        description:
            "Built-in utilities for file hashing, duplicate detection, metadata extraction, and batch renaming.",
        color: "text-cyan-400",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#79FE77] mb-4">
                    Core Capabilities
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)] mb-6">
                    Everything you need to
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#79FE77]">
                        control your files
                    </span>
                </h3>
                <p className="text-[#BDCBB6] max-w-2xl mx-auto text-lg">
                    ALEPH provides a complete suite of tools for file system automation, monitoring, and security — all running locally on your machine.
                </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        whileHover={{ borderColor: "rgba(68, 71, 72, 0.4)", y: -4 }}
                        className="glass-panel rounded-xl p-8 border border-[#444748]/10 hover:bg-[#1a1b1b] transition-all group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[#0d0e0f] border border-[#444748]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className={`material-symbols-outlined ${feature.color} text-2xl`}>
                                {feature.icon}
                            </span>
                        </div>
                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-3 font-[family-name:var(--font-space-grotesk)]">
                            {feature.title}
                        </h4>
                        <p className="text-sm text-[#BDCBB6] leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
