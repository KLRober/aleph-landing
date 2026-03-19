"use client";

import { motion } from "framer-motion";

const features = [
    { icon: "memory", label: "LOCAL PROCESSING" },
    { icon: "code", label: "PYTHON POWERED" },
    { icon: "bolt", label: "ZERO LATENCY" },
    { icon: "lock", label: "END-TO-END ENCRYPTION" },
    { icon: "category", label: "SMART CLASSIFICATION" },
    { icon: "hub", label: "MODULAR ARCHITECTURE" },
];

export default function FeatureMarquee() {
    const doubledFeatures = [...features, ...features];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full border-t border-b border-white/[0.04] overflow-hidden py-4 mt-4"
        >
            <div
                className="flex whitespace-nowrap gap-6"
                style={{ animation: "marquee 30s linear infinite" }}
            >
                {doubledFeatures.map((feature, i) => (
                    <div
                        key={`${feature.label}-${i}`}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] flex-shrink-0"
                    >
                        <span className="material-symbols-outlined text-[16px] text-zinc-500">
                            {feature.icon}
                        </span>
                        <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
