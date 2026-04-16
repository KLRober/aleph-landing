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
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
                    Pricing
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)] mb-6">
                    Simple, transparent pricing
                </h3>
                <p className="text-[#B0B0B0] max-w-xl mx-auto text-lg">
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
                        whileHover={{ y: -4 }}
                        className={`rounded-xl p-8 border flex flex-col transition-all ${
                            plan.highlighted
                                ? "bg-gradient-to-b from-[#C0C0C0]/10 to-[#1F2020]/60 border-[#C0C0C0]/30 relative"
                                : "glass-panel border-[#444748]/10 hover:bg-[#1a1b1b]"
                        }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C0C0C0] text-[#0a0a0a] px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wider">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="mb-6">
                            <div className="text-sm font-mono text-[#B0B0B0] uppercase tracking-widest mb-2">
                                {plan.name}
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-sm text-[#B0B0B0]">{plan.period}</span>
                                )}
                            </div>
                            <p className="text-sm text-[#B0B0B0] mt-3">
                                {plan.description}
                            </p>
                        </div>

                        {/* Features list */}
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-[#B0B0B0]">
                                    <span className="material-symbols-outlined text-[#C0C0C0] text-base">
                                        check_circle
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-3 rounded-lg font-bold text-sm tracking-tight transition-all ${
                                plan.highlighted
                                    ? "bg-[#C0C0C0] text-[#0a0a0a] hover:bg-[#a0a0a0]"
                                    : "bg-[#353434] border border-[#444748]/30 text-[#e9e9e9] hover:bg-[#3a3939]"
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
