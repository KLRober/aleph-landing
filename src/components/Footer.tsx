"use client";

import { motion } from "framer-motion";

const footerColumns = [
    {
        title: "Resources",
        links: [
            { label: "Documentation", href: "#" },
            { label: "API Reference", href: "#" },
            { label: "Changelog", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Security Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
    {
        title: "Network",
        links: [
            { label: "Uptime: 100%", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Status Page", href: "#" },
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
            className="w-full border-t border-zinc-900 bg-zinc-950"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
                {/* Brand */}
                <div>
                    <div className="text-zinc-50 font-black text-xl mb-6 tracking-tighter uppercase font-[family-name:var(--font-space-grotesk)]">
                        ALEPH V1
                    </div>
                    <p className="text-zinc-500 text-xs font-mono leading-relaxed max-w-xs">
                        HIGH-PERFORMANCE INFRASTRUCTURE FOR THE NEXT GENERATION OF LOCAL-FIRST COMPUTING. BUILT FOR PRECISION.
                    </p>
                </div>

                {/* Link Columns */}
                {footerColumns.map((col) => (
                    <div key={col.title} className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-widest">
                        <div className="text-zinc-200 mb-2">{col.title}</div>
                        {col.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-zinc-500 hover:text-zinc-200 transition-colors underline-offset-4 hover:underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            {/* Copyright Bar */}
            <div className="px-12 py-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    © 2024 ALEPH V1. ALL RIGHTS RESERVED. SYSTEM STATUS: OPERATIONAL.
                </div>
                <div className="flex gap-6">
                    <span className="material-symbols-outlined text-zinc-600 text-lg">language</span>
                    <span className="material-symbols-outlined text-zinc-600 text-lg">terminal</span>
                </div>
            </div>
        </motion.footer>
    );
}
