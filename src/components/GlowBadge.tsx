"use client";

import { motion } from "framer-motion";

interface GlowBadgeProps {
    text: string;
}

export default function GlowBadge({ text }: GlowBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glow-border relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
            <span className="relative z-10 flex items-center gap-2 font-mono text-xs tracking-wider text-[#6d4aff]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4b2bee] shadow-[0_0_6px_rgba(75,43,238,0.8)]" />
                {text}
            </span>
        </motion.div>
    );
}
