"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const testimonials = [
    {
        quote: "ALEPH transformed my workflow. Files that used to pile up on my desktop are now automatically sorted, renamed, and archived. It's like having a digital assistant that never sleeps.",
        name: "Santiago M.",
        role: "Software Engineer",
        avatar: "SM",
    },
    {
        quote: "The privacy-first approach is what sold me. No cloud, no subscriptions, no data leaving my machine. Just pure, local-first automation that actually works.",
        name: "Laura K.",
        role: "Data Analyst",
        avatar: "LK",
    },
    {
        quote: "I was skeptical about file automation tools, but ALEPH's rule engine is incredibly flexible. I set up complex workflows in minutes that would have taken hours of scripting.",
        name: "Mateo R.",
        role: "DevOps Lead",
        avatar: "MR",
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#79FE77] mb-4">
                    Testimonials
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                    Trusted by power users
                </h3>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {testimonials.map((t) => (
                    <motion.div
                        key={t.name}
                        variants={cardVariants}
                        className="glass-panel rounded-xl p-8 border border-[#444748]/10 flex flex-col justify-between hover:bg-[#1a1b1b] transition-all"
                    >
                        {/* Quote */}
                        <div className="mb-8">
                            <span className="text-[#79FE77] text-3xl font-serif leading-none block mb-4">&ldquo;</span>
                            <p className="text-[#BDCBB6] text-sm leading-relaxed">
                                {t.quote}
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0d0e0f] border border-[#444748]/30 flex items-center justify-center text-xs font-mono text-[#79FE77]">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-[#e9e9e9]">{t.name}</div>
                                <div className="text-xs text-[#BDCBB6] font-mono">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
