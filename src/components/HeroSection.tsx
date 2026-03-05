"use client";

import AlephSymbol from "./AlephSymbol";
import { useState } from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

export default function HeroSection() {
    const [accepted, setAccepted] = useState(false);

    return (
        <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 relative">
                {/* Left Column (60%) - Content */}
                <div className="flex flex-col gap-8 w-full lg:w-[60%] text-left z-20 pr-0 lg:pr-12">
                    {/* Live badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 w-fit border border-white/10"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
                            Aleph v1.0 is live
                        </span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white"
                    >
                        Tu centro de mando digital, local y privado.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-lg text-slate-400 max-w-xl leading-relaxed"
                    >
                        Organiza archivos, gestiona PDFs y analiza logs con la potencia
                        de Python. Sin nubes, sin rastreo, 100% en tu hardware.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <ShimmerButton disabled={!accepted} />
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="glass-card hover:bg-white/10 text-white text-base font-bold h-12 px-8 rounded-full transition-colors flex items-center gap-2 border border-white/10"
                        >
                            Documentation
                        </motion.button>
                    </motion.div>

                    {/* Legal checkbox */}
                    <motion.label
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="mt-2 flex cursor-pointer items-start gap-3 group"
                    >
                        <div className="relative mt-0.5 flex items-center justify-center">
                            <input
                                type="checkbox"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                                className="peer sr-only"
                            />
                            <div className="h-4 w-4 rounded-sm border border-zinc-700 bg-zinc-900/50 transition-colors peer-checked:border-violet-500 peer-checked:bg-violet-500 group-hover:border-violet-400/50" />
                            <svg
                                className="absolute h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-widest leading-relaxed text-zinc-500">
                            Acepto los{" "}
                            <a
                                href="#"
                                className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
                            >
                                Términos de Servicio
                            </a>{" "}
                            y la{" "}
                            <a
                                href="#"
                                className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
                            >
                                Política de Privacidad
                            </a>
                        </span>
                    </motion.label>
                </div>

                {/* Right Column (40%) - Aleph Symbol */}
                <AlephSymbol />
            </div>
        </section>
    );
}
