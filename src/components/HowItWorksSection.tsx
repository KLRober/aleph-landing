"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Install & Configure",
        description:
            "Download ALEPH and run the installer. Configure your watched directories and set your preferences through the intuitive dashboard.",
        icon: "download",
    },
    {
        number: "02",
        title: "Define Your Rules",
        description:
            "Create automation rules using the visual rule builder. Set triggers, conditions, and actions — no coding required.",
        icon: "tune",
    },
    {
        number: "03",
        title: "Let It Run",
        description:
            "ALEPH runs silently in the background, executing your rules in real-time. Monitor everything from the system tray.",
        icon: "rocket_launch",
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
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
                    Getting Started
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                    Up and running in minutes
                </h3>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/20 to-transparent" />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative flex flex-col items-center text-center"
                    >
                        {/* Step circle */}
                        <div className="w-32 h-32 rounded-full border border-[#444748]/20 bg-[#0d0e0f] flex flex-col items-center justify-center mb-8 relative">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-3xl mb-1">
                                {step.icon}
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-[#B0B0B0]">
                                STEP {step.number}
                            </span>
                            {/* Pulse ring */}
                            <div className="absolute inset-0 rounded-full border border-[#C0C0C0]/10 animate-ping" style={{ animationDuration: "3s" }} />
                        </div>

                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-3 font-[family-name:var(--font-space-grotesk)]">
                            {step.title}
                        </h4>
                        <p className="text-sm text-[#B0B0B0] leading-relaxed max-w-xs">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
