"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const testimonials = [
    {
        quote: "I set up a rule: every PDF that lands in Downloads gets compressed and moved to my project folder. ALEPH does it in the background while I keep working. It just works, no fuss.",
        name: "Santiago M.",
        role: "Software Engineer",
        avatar: "/avatar-santiago.png",
    },
    {
        quote: "The privacy-first approach is what sold me. My photos had GPS data embedded and I didn\u2019t even know. ALEPH strips all that metadata with one click — no cloud upload, no risk.",
        name: "Laura K.",
        role: "Photographer",
        avatar: "/avatar-laura.png",
    },
    {
        quote: "The Trigger → Condition → Action model clicked instantly. In minutes I had pipelines auto-organizing my files by extension, compressing images for social, and backing up contracts.",
        name: "Mateo R.",
        role: "Freelance Designer",
        avatar: "/avatar-mateo.png",
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
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-zinc-500 mb-4">
                    Testimonials
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)]">
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
                        whileHover={{ y: -4 }}
                        className="glass-panel rounded-2xl p-8 border border-[#333842]/30 flex flex-col justify-between card-hover-glow"
                    >
                        {/* Quote */}
                        <div className="mb-8">
                            <span className="text-zinc-500 text-3xl font-serif leading-none block mb-4">&ldquo;</span>
                            <p className="text-[#9ca3af] text-sm leading-relaxed">
                                {t.quote}
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#333842]/50 flex-shrink-0">
                                <Image
                                    src={t.avatar}
                                    alt={`Portrait of ${t.name}`}
                                    width={44}
                                    height={44}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-[#e9e9e9]">{t.name}</div>
                                <div className="text-xs text-[#9ca3af] font-mono">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
