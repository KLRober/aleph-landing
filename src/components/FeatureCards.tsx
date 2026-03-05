"use client";

import { motion } from "framer-motion";

const features = [
    {
        icon: "blur_on",
        title: "Minimalist UI",
        description: "Clean interfaces focusing on content and functionality over decoration."
    },
    {
        icon: "network_node",
        title: "Local Workflows",
        description: "Dominate your local environment with powerful integration tools."
    },
    {
        icon: "radio_button_checked",
        title: "Capsule Components",
        description: "Fully rounded capsule style buttons and elements for a technical aesthetic."
    },
    {
        icon: "data_object",
        title: "Ticker Integration",
        description: "Clean ticker style bar with crisp mono-spaced text for real-time data."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
};

export default function FeatureCards() {
    return (
        <section id="features" className="mt-24 lg:mt-32 relative z-20 px-4 max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 text-center mb-12 items-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Engineered for Excellence
                </h2>
                <p className="text-slate-400 max-w-2xl">
                    Discover why developers choose ALEPH for their most demanding projects.
                    Built with performance and developer experience in mind.
                </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.08] transition-colors border border-white/[0.1]"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                            <span className="material-symbols-outlined">{feature.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
