"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Install & Configure",
        description:
            "Download ALEPH for Windows and run the installer. Sign in, select the folders you want to monitor, and set your preferences in the dashboard.",
        icon: "download",
        accent: "#ffffff",
    },
    {
        number: "02",
        title: "Build Your Rules",
        description:
            "Use the Pipeline Builder to create automation rules: pick a trigger, set conditions (extension, size, name, regex), and chain actions into a pipeline.",
        icon: "tune",
        accent: "#9ca3af",
    },
    {
        number: "03",
        title: "Let It Run",
        description:
            "ALEPH runs silently from the system tray, executing your pipelines in real-time. Monitor everything from the dashboard or the command palette.",
        icon: "rocket_launch",
        accent: "#ffffff",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-zinc-500 mb-4">
                    Getting Started
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)]">
                    Three steps, that{"'"}s it
                </h3>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connection line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                    className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex flex-col items-center text-center group cursor-default"
                    >
                        {/* Step circle */}
                        <div
                            className="w-32 h-32 rounded-full border bg-[#0d0e10] flex flex-col items-center justify-center mb-8 relative transition-transform duration-300 group-hover:scale-105 group-hover:border-white/30"
                            style={{ borderColor: `${step.accent}20` }}
                        >
                            <span
                                className="material-symbols-outlined text-3xl mb-1 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: step.accent }}
                            >
                                {step.icon}
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-[#9ca3af]">
                                STEP {step.number}
                            </span>
                            {/* Subtle glow ring */}
                            <div
                                className="absolute inset-0 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                                style={{
                                    boxShadow: `0 0 30px ${step.accent}30`,
                                }}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-3 font-[family-name:var(--font-outfit)]">
                            {step.title}
                        </h4>
                        <p className="text-sm text-[#9ca3af] leading-relaxed max-w-xs">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
