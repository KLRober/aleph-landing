"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const nodeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

interface FlowNodeProps {
    icon: string;
    label: string;
    sublabel: string;
    tagText: string;
    tagColor: string;
    borderColor: string;
    iconColor: string;
    size?: "normal" | "large";
}

function FlowNode({ icon, label, sublabel, tagText, tagColor, borderColor, iconColor, size = "normal" }: FlowNodeProps) {
    const isLarge = size === "large";
    return (
        <motion.div variants={nodeVariants} className="flex flex-col items-center gap-6 group">
            <div
                className={`${isLarge ? "w-24 h-24 rounded-full border-2" : "w-20 h-20 rounded-xl border"} bg-[#0d0e0f] ${borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                style={isLarge ? { boxShadow: "0 0 30px rgba(121, 254, 119, 0.2)" } : {}}
            >
                <span
                    className={`material-symbols-outlined ${isLarge ? "text-4xl" : "text-3xl"} ${iconColor}`}
                    style={isLarge ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                    {icon}
                </span>
            </div>
            <div className="text-center">
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${tagColor}`}>
                    {tagText}
                </div>
                <div className="text-lg text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                    {label}
                </div>
                {sublabel && (
                    <div className="text-xs text-[#BDCBB6] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sublabel}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function NeuralFlowSection() {
    return (
        <section className="py-24 px-8 max-w-screen-2xl mx-auto relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#79FE77] mb-4">
                    Neural Infrastructure
                </h2>
                <h3 className="text-4xl font-medium text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                    Automated Flow Topology
                </h3>
            </motion.div>

            {/* Flow Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative glass-panel rounded-xl p-12 overflow-hidden border border-[#444748]/10"
            >
                {/* Radial gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(121,254,119,0.05),transparent)]" />

                {/* 3 Nodes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    <FlowNode
                        icon="database"
                        label="Local Storage"
                        sublabel="Primary data source"
                        tagText="Source Node"
                        tagColor="text-[#BDCBB6]"
                        borderColor="border-[#79FE77]/30"
                        iconColor="text-[#79FE77]"
                    />
                    <FlowNode
                        icon="hub"
                        label="Automation Engine"
                        sublabel="Core processing unit"
                        tagText="Aleph Core"
                        tagColor="text-cyan-400"
                        borderColor="border-[#79FE77]"
                        iconColor="text-[#79FE77]"
                        size="large"
                    />
                    <FlowNode
                        icon="cloud_done"
                        label="Encrypted Vault"
                        sublabel="Secure output destination"
                        tagText="Edge Sink"
                        tagColor="text-[#BDCBB6]"
                        borderColor="border-cyan-400/30"
                        iconColor="text-cyan-400"
                    />
                </div>

                {/* Connection Lines SVG */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 hidden md:block" preserveAspectRatio="none">
                    <line x1="25%" y1="50%" x2="42%" y2="50%" stroke="#79FE77" strokeDasharray="10 5" strokeWidth="2" />
                    <line x1="58%" y1="50%" x2="75%" y2="50%" stroke="#79FE77" strokeDasharray="10 5" strokeWidth="2" />
                </svg>
            </motion.div>
        </section>
    );
}
