"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Is ALEPH really free?",
        answer:
            "Yes! The free plan includes the automation engine with basic rules, the File Optimizer (up to 3 GB), system tray integration, and command palette. Upgrade to Pro for unlimited rules, Document Studio, Image Studio, Security Center, and OCR.",
    },
    {
        question: "Does ALEPH send my files to the cloud?",
        answer:
            "Never. ALEPH is 100% local-first. All file processing happens on your machine. The app works fully offline in Sovereign Mode — it only needs internet for authentication and Stripe payments.",
    },
    {
        question: "What operating systems are supported?",
        answer:
            "ALEPH currently supports Windows 10 and Windows 11. macOS and Linux support are on the roadmap for future releases.",
    },
    {
        question: "Can I create custom automation rules?",
        answer:
            "Absolutely. The visual Pipeline Builder lets you combine triggers (folder watcher, manual), 9 types of conditions (extension, name patterns, size, date, regex), and 20+ actions (move, compress, convert, encrypt, notify) into chained pipelines.",
    },
    {
        question: "How does automation work in the background?",
        answer:
            "ALEPH uses a Trigger → Condition → Action model. Set a folder watcher, define your filters, and chain multiple actions into a pipeline. It runs silently from the system tray, processing files as they arrive — even waiting for downloads to finish before acting.",
    },
    {
        question: "What can Document Studio and Image Studio do?",
        answer:
            "Document Studio handles PDFs: merge, split, compress (3 quality levels), rotate, reorder, and watermark. Image Studio offers batch conversion, auto-enhance, smart compression, watermarking, social media resize, and AI-powered background removal.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-[#444748]/10"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-[#e9e9e9] font-medium text-lg pr-8 group-hover:text-[#C0C0C0] transition-colors">
                    {question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="material-symbols-outlined text-[#B0B0B0] flex-shrink-0"
                >
                    expand_more
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-[#B0B0B0] text-sm leading-relaxed pb-6 pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    return (
        <section id="faq" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-[#C0C0C0] mb-4">
                    FAQ
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#e9e9e9] font-[family-name:var(--font-space-grotesk)]">
                    Frequently asked questions
                </h3>
            </motion.div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}
