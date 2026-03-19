"use client";

import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const nodeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.15, ease: "easeOut" },
    }),
};

interface PipelineNodeProps {
    icon: string;
    label: string;
    index: number;
    color: string;
    bgColor: string;
}

function PipelineNode({ icon, label, index, color, bgColor }: PipelineNodeProps) {
    return (
        <motion.div
            custom={index}
            variants={nodeVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex flex-col items-center gap-3"
        >
            <div
                className={`w-14 h-14 rounded-xl ${bgColor} border border-white/[0.06] flex items-center justify-center`}
            >
                <span className={`material-symbols-outlined text-[22px] ${color}`}>
                    {icon}
                </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                {label}
            </span>
        </motion.div>
    );
}

function ConnectorDot() {
    return (
        <div className="hidden lg:flex items-center px-2">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="w-1.5 h-1.5 rounded-full bg-zinc-600"
            />
        </div>
    );
}

export default function PipelineBuilderSection() {
    return (
        <section id="protocols" className="px-4 max-w-5xl mx-auto w-full mt-16">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-6"
            >
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">
                        The Pipeline Builder
                    </h2>
                    <p className="text-sm text-zinc-500 mt-2 max-w-xl mx-auto italic">
                        Visual logic for your file&apos;s journey from ingestion to long-term
                        cold storage.
                    </p>
                </div>

                {/* Pipeline flow card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bento-card p-8 lg:p-10"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 py-4">
                        <PipelineNode
                            icon="upload_file"
                            label="Ingest"
                            index={0}
                            color="text-green-400"
                            bgColor="bg-green-500/10"
                        />
                        <ConnectorDot />
                        <PipelineNode
                            icon="play_arrow"
                            label="Execute"
                            index={1}
                            color="text-pink-400"
                            bgColor="bg-pink-500/10"
                        />
                        <ConnectorDot />
                        <PipelineNode
                            icon="storage"
                            label="Classify"
                            index={2}
                            color="text-zinc-300"
                            bgColor="bg-zinc-800"
                        />
                        <ConnectorDot />
                        <PipelineNode
                            icon="inventory_2"
                            label="Archive"
                            index={3}
                            color="text-green-400"
                            bgColor="bg-green-500/10"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
