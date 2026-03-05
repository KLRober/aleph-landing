"use client";

import { motion } from "framer-motion";

interface ShimmerButtonProps {
    disabled?: boolean;
}

export default function ShimmerButton({ disabled = false }: ShimmerButtonProps) {
    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.03 }}
            whileTap={disabled ? {} : { scale: 0.97 }}
            disabled={disabled}
            className={`relative text-base font-bold h-12 px-8 rounded-full transition-all flex items-center gap-2 ${disabled
                    ? "cursor-not-allowed bg-white/10 text-white/30"
                    : "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-slate-200"
                }`}
        >
            {/* Windows icon */}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="flex-shrink-0"
            >
                <path d="M0 3.449L9.75 2.1v9.45H0m10.949-9.6L24 0v11.4H10.949M0 12.6h9.75v9.45L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>

            <span>Descargar v1.0 para Windows</span>
        </motion.button>
    );
}
