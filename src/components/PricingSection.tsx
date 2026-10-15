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
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Everything you need to start automating your files. No credit card required.",
        features: [
            "Automation Engine (basic rules)",
            "File Optimizer (up to 3 GB)",
            "System tray & command palette",
            "Desktop notifications",
            "3 languages (ES, EN, DE)",
        ],
        cta: "Download Free",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        description: "For power users who need the full suite of tools and unlimited automation.",
        features: [
            "Unlimited automation rules",
            "Document Studio (PDF suite)",
            "Image Studio (batch processing)",
            "Security Center (AES-256 backup)",
            "OCR & Deep Search Engine",
            "Duplicate detection & treemap",
            "Smart Search & AI tagging",
            "Priority support",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-zinc-500 mb-4">
                    Pricing
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)] mb-6">
                    Simple, transparent pricing
                </h3>
                <p className="text-[#9ca3af] max-w-xl mx-auto text-lg">
                    Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
                </p>
            </motion.div>

            {/* Pricing Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto"
            >
                {plans.map((plan) => (
                    <motion.div
                        key={plan.name}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.015 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className={`rounded-2xl p-8 border flex flex-col transition-all duration-300 shadow-xl ${
                            plan.highlighted
                                ? "bg-gradient-to-b from-white/10 to-[#1b1f27]/90 border-white/30 relative shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                                : "glass-panel border-[#333842]/30 card-hover-glow hover:border-white/20"
                        }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#0f1115] px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wider shadow-md animate-pulse-soft">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="mb-6">
                            <div className="text-sm font-mono text-[#9ca3af] uppercase tracking-widest mb-2">
                                {plan.name}
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)]" style={{ fontVariantNumeric: "tabular-nums" }}>
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-sm text-[#9ca3af]">{plan.period}</span>
                                )}
                            </div>
                            <p className="text-sm text-[#9ca3af] mt-3">
                                {plan.description}
                            </p>
                        </div>

                        {/* Features list */}
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-[#9ca3af]">
                                    <span className="material-symbols-outlined text-white text-base">
                                        check_circle
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <motion.button
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-tight transition-all cursor-pointer shadow-lg ${
                                plan.highlighted
                                    ? "accent-button glow-button text-[#0f1115]"
                                    : "bg-[#1c1e22] border border-[#333842]/50 text-[#e9e9e9] hover:bg-[#252830] hover:border-zinc-500/50"
                            }`}
                        >
                            {plan.cta}
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
