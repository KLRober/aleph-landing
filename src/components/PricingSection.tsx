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
        description: "Perfect for personal use and getting started with file automation.",
        features: [
            "Up to 5 active rules",
            "3 watched directories",
            "Basic automation actions",
            "System tray integration",
            "Community support",
        ],
        cta: "Download Free",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        description: "For power users who need advanced automation and more control.",
        features: [
            "Unlimited rules",
            "Unlimited directories",
            "Advanced conditions & regex",
            "Scheduled automations",
            "Priority support",
            "Dashboard analytics",
            "Duplicate detection",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For teams and organizations with custom needs and compliance requirements.",
        features: [
            "Everything in Pro",
            "Multi-user management",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantees",
            "Audit logging",
            "On-premise deployment",
        ],
        cta: "Contact Sales",
        highlighted: false,
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
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#79FE77] mb-4">
                    Pricing
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)] mb-6">
                    Simple, transparent pricing
                </h3>
                <p className="text-[#BDCBB6] max-w-xl mx-auto text-lg">
                    Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
                </p>
            </motion.div>

            {/* Pricing Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            >
                {plans.map((plan) => (
                    <motion.div
                        key={plan.name}
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        className={`rounded-xl p-8 border flex flex-col transition-all ${
                            plan.highlighted
                                ? "bg-gradient-to-b from-[#79FE77]/10 to-[#1F2020]/60 border-[#79FE77]/30 relative"
                                : "glass-panel border-[#444748]/10 hover:bg-[#1a1b1b]"
                        }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#79FE77] text-[#003908] px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wider">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="mb-6">
                            <div className="text-sm font-mono text-[#BDCBB6] uppercase tracking-widest mb-2">
                                {plan.name}
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-sm text-[#BDCBB6]">{plan.period}</span>
                                )}
                            </div>
                            <p className="text-sm text-[#BDCBB6] mt-3">
                                {plan.description}
                            </p>
                        </div>

                        {/* Features list */}
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-[#BDCBB6]">
                                    <span className="material-symbols-outlined text-[#79FE77] text-base">
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
                                    ? "bg-[#79FE77] text-[#003908] hover:bg-[#6ae668]"
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
