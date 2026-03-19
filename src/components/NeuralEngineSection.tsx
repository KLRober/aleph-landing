"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AlephVisual = dynamic(() => import("@/components/AlephVisual"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 animate-pulse" />
        </div>
    ),
});

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

function NodeLabel({
    status,
    label,
    className,
}: {
    status: string;
    label: string;
    className?: string;
}) {
    return (
        <div className={`absolute ${className} z-10`}>
            <div className="bg-black/80 border border-green-500/20 rounded-md px-3 py-1.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                    <span className="text-[9px] font-mono text-green-400 tracking-wider uppercase">
                        {status}
                    </span>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                    {label}
                </div>
            </div>
        </div>
    );
}

export default function NeuralEngineSection() {
    return (
        <section id="neural-engine" className="px-4 max-w-5xl mx-auto w-full mt-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col gap-2"
            >
                {/* Section label */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between mb-2"
                >
                    <span className="text-[11px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
                        Neural Engine Core
                    </span>
                    <span className="text-[10px] font-mono text-green-500/50 tracking-wider uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        System Ready
                    </span>
                </motion.div>

                {/* Main visual card */}
                <motion.div
                    variants={itemVariants}
                    className="bento-card overflow-hidden relative neural-core-bg"
                    style={{ minHeight: "380px" }}
                >
                    {/* 3D Visual */}
                    <div className="absolute inset-0">
                        <AlephVisual />
                    </div>

                    {/* Node labels overlaid */}
                    <NodeLabel
                        status="NODE_01: ACTIVE"
                        label="Classifying Image_772.raw"
                        className="top-8 left-8 md:top-12 md:left-16"
                    />
                    <NodeLabel
                        status="NODE_02: ACTIVE"
                        label="AES-256 Cleaning Pipeline"
                        className="bottom-16 right-8 md:bottom-20 md:right-16"
                    />

                    {/* Scan line */}
                    <div className="scan-line absolute inset-0 pointer-events-none" />
                </motion.div>
            </motion.div>
        </section>
    );
}
