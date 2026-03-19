"use client";

import { motion } from "framer-motion";

const footerColumns = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#infrastructure" },
            { label: "Pricing", href: "#pricing" },
            { label: "Documentation", href: "#docs" },
            { label: "Changelog", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Status", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "#security" },
            { label: "Terms", href: "#" },
            { label: "Security", href: "#security" },
            { label: "Licenses", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-white/[0.04] mt-16 pt-12 pb-8 px-4"
        >
            <div className="max-w-5xl mx-auto">
                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-bold text-green-400">ℵ</span>
                            <span className="text-sm font-bold tracking-tight text-white uppercase">
                                ALEPH
                            </span>
                            <span className="text-[10px] font-mono text-zinc-600">V1</span>
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed max-w-[180px]">
                            The monolithic file infrastructure for high-performance engineers.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-[10px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-4">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-[12px] text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright bar */}
                <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[10px] font-mono text-zinc-700 tracking-wider uppercase">
                        © 2024 ALEPH V1 Infrastructure. All rights reserved.
                    </span>
                    <span className="text-[10px] font-mono text-zinc-700 tracking-wider">
                        Built with{" "}
                        <span className="text-green-600/70">Python</span>
                    </span>
                </div>
            </div>
        </motion.footer>
    );
}
