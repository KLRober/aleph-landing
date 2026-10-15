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
                {/* Continuous Traveling Energy Beam */}
                <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-0.5 overflow-hidden z-0">
                    <div className="absolute inset-0 bg-white/10" />
                    <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-beam-slide" />
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex flex-col items-center text-center group cursor-default z-10"
                    >
                        {/* Step circle container */}
                        <div className="relative mb-8">
                            {/* Subtle continuous radar pulse */}
                            <span className="absolute -inset-2 rounded-full border border-white/5 opacity-50 animate-pulse-soft" />

                            <div
                                className="w-32 h-32 rounded-full border bg-[#0d0e10]/95 backdrop-blur-md flex flex-col items-center justify-center relative transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 shadow-xl"
                                style={{ borderColor: `${step.accent}20` }}
                            >
                                <span
                                    className="material-symbols-outlined text-3xl mb-1 transition-transform duration-300 group-hover:scale-115"
                                    style={{ color: step.accent }}
                                >
                                    {step.icon}
                                </span>
                                <span className="font-mono text-[10px] tracking-widest text-[#9ca3af] font-semibold">
                                    STEP {step.number}
                                </span>

                                {/* Glow ring on hover */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-60"
                                    style={{
                                        boxShadow: `0 0 35px ${step.accent}35`,
                                    }}
                                />
                            </div>
                        </div>

                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-3 font-[family-name:var(--font-outfit)] group-hover:text-white transition-colors">
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
