"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="pt-36 pb-10 px-4 max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glow-border rounded-full px-4 py-1.5 mb-8"
            >
                <span className="relative z-10 flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] text-green-400 uppercase">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                    Organize &bull; Secure &bull; Harmonize
                </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white max-w-3xl"
            >
                Recuperá 5 horas de tu semana.{" "}
                Dejá que{" "}
                <span className="text-green-400">ℵ</span>{" "}
                ALEPH maneje tus archivos.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed"
            >
                The first monolithic file infrastructure for high-performance engineers.
                Local-first neural classification, zero-latency metadata cleaning, and
                autonomous logic flows.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
                {/* Primary: Glow CTA */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="glow-cta bg-white text-black text-sm font-bold h-12 px-8 rounded-full transition-all flex items-center gap-2"
                >
                    TRY IT FOR FREE — DOWNLOAD V1.0
                </motion.button>

                {/* Secondary: Outline */}
                <motion.button
                    whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white/10 text-zinc-300 text-sm font-medium h-12 px-8 rounded-full transition-all hover:text-white"
                >
                    READ DOCUMENTATION
                </motion.button>
            </motion.div>
        </section>
    );
}
