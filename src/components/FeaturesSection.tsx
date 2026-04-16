"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const features = [
    {
        icon: "bolt",
        title: "Automation Engine",
        description:
            "Create intelligent rules with Trigger → Condition → Action. 20+ actions, 9 condition types, chained pipelines that run silently in the background.",
        color: "text-[#C0C0C0]",
    },
    {
        icon: "lock",
        title: "100% Local & Private",
        description:
            "Every file is processed on your machine. Zero cloud uploads, zero data leaks. Works fully offline with Sovereign Mode — only needs internet for auth and payments.",
        color: "text-zinc-300",
    },
    {
        icon: "description",
        title: "Document Studio",
        description:
            "Complete PDF processing suite: compress with 3 quality levels, merge, split, rotate, reorder pages, and add customizable watermarks.",
        color: "text-[#C0C0C0]",
    },
    {
        icon: "image",
        title: "Image Studio",
        description:
            "Batch conversion between formats, auto-enhance, smart compression, watermarking, social media resize, and AI-powered background removal.",
        color: "text-zinc-300",
    },
    {
        icon: "shield",
        title: "Security Center",
        description:
            "AES-256 encrypted backups, incremental backup, DoD 5220.22-M secure shred, metadata stripping, integrity manifests, and Security Health Score.",
        color: "text-[#C0C0C0]",
    },
    {
        icon: "search",
        title: "OCR & Deep Search",
        description:
            "Extract text from images and scanned PDFs with Tesseract OCR. Index file contents and search inside documents — not just by filename.",
        color: "text-zinc-300",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
                    Core Capabilities
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)] mb-6">
                    Everything you need to
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#C0C0C0]">
                        control your files
                    </span>
                </h3>
                <p className="text-[#B0B0B0] max-w-2xl mx-auto text-lg">
                    From automated file sorting to PDF processing, image optimization, encrypted backups, and OCR search — all running locally on your machine.
                </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        whileHover={{ borderColor: "rgba(68, 71, 72, 0.4)", y: -4 }}
                        className="glass-panel rounded-xl p-8 border border-[#444748]/10 hover:bg-[#1a1b1b] transition-all group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[#0d0e0f] border border-[#444748]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className={`material-symbols-outlined ${feature.color} text-2xl`}>
                                {feature.icon}
                            </span>
                        </div>
                        <h4 className="text-xl font-bold text-[#e9e9e9] mb-3 font-[family-name:var(--font-space-grotesk)]">
                            {feature.title}
                        </h4>
                        <p className="text-sm text-[#B0B0B0] leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
