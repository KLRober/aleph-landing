"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Is ALEPH really free?",
        answer:
            "Yes! The free tier includes up to 5 active rules and 3 watched directories. It's perfect for personal use. You can upgrade to Pro at any time for unlimited rules and advanced features.",
    },
    {
        question: "Does ALEPH send my files to the cloud?",
        answer:
            "No. ALEPH is 100% local-first. Your files never leave your machine. All processing happens locally, which means zero latency and complete privacy.",
    },
    {
        question: "What operating systems are supported?",
        answer:
            "ALEPH currently supports Windows 10/11. macOS and Linux support is on the roadmap and planned for upcoming releases.",
    },
    {
        question: "Can I create custom automation rules?",
        answer:
            "Absolutely. The visual rule builder lets you combine triggers (file created, modified, renamed), conditions (name patterns, size, date, regex), and actions (move, copy, rename, delete, notify) into powerful automation workflows.",
    },
    {
        question: "How does ALEPH differ from similar tools?",
        answer:
            "ALEPH is built for performance and privacy. Unlike cloud-based solutions, it runs entirely on your machine with event-driven architecture instead of polling. The rule engine supports complex conditions that most alternatives lack.",
    },
    {
        question: "Can I use ALEPH for team/enterprise workflows?",
        answer:
            "Yes. Our Enterprise plan includes multi-user management, custom integrations, audit logging, and on-premise deployment options. Contact our sales team for a custom quote.",
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
