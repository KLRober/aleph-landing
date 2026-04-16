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
        quote: "I set up a rule: every PDF that lands in Downloads gets compressed and moved to my project folder. ALEPH does it in the background while I keep working. It just works, no fuss.",
        name: "Santiago M.",
        role: "Software Engineer",
        avatar: "SM",
    },
    {
        quote: "The privacy-first approach is what sold me. My photos had GPS data embedded and I didn't even know. ALEPH strips all that metadata with one click — no cloud upload, no risk.",
        name: "Laura K.",
        role: "Photographer",
        avatar: "LK",
    },
    {
        quote: "The Trigger → Condition → Action model clicked instantly. In minutes I had pipelines auto-organizing my files by extension, compressing images for social, and backing up contracts.",
        name: "Mateo R.",
        role: "Freelance Designer",
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
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
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
                            <span className="text-[#C0C0C0] text-3xl font-serif leading-none block mb-4">&ldquo;</span>
                            <p className="text-[#B0B0B0] text-sm leading-relaxed">
                                {t.quote}
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0d0e0f] border border-[#444748]/30 flex items-center justify-center text-xs font-mono text-[#C0C0C0]">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-[#e9e9e9]">{t.name}</div>
                                <div className="text-xs text-[#B0B0B0] font-mono">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
