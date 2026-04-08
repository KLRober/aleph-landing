"use client";

import { motion } from "framer-motion";

const footerColumns = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Changelog", href: "#" },
            { label: "Roadmap", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Documentation", href: "#" },
            { label: "API Reference", href: "#" },
            { label: "Getting Started", href: "#how-it-works" },
            { label: "FAQ", href: "#faq" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Security Policy", href: "#" },
            { label: "License", href: "#" },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "GitHub", href: "#" },
            { label: "Discord", href: "#" },
            { label: "Twitter / X", href: "#" },
            { label: "Blog", href: "#" },
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 px-8 md:px-12 py-16 max-w-screen-2xl mx-auto">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <div className="text-zinc-50 font-black text-xl mb-4 tracking-tighter uppercase font-[family-name:var(--font-space-grotesk)]">
                        ALEPH V1
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mb-6">
                        The high-performance automation engine for local-first file control. Built for privacy, speed, and precision.
                    </p>

                    {/* Newsletter mini form */}
                    <div className="flex gap-2 max-w-xs">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 bg-[#0d0e0f] border border-[#444748]/20 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-[#79FE77]/30 transition-colors"
                        />
                        <button className="bg-[#79FE77] text-[#003908] px-3 py-2 rounded-lg text-xs font-bold hover:bg-[#6ae668] transition-colors flex-shrink-0">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-zinc-600 text-[10px] mt-2">
                        Get updates about new features and releases.
                    </p>
                </div>

                {/* Link Columns */}
                {footerColumns.map((col) => (
                    <div key={col.title} className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-widest">
                        <div className="text-zinc-200 mb-1 text-[11px]">{col.title}</div>
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

            {/* Bottom Bar */}
            <div className="px-8 md:px-12 py-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    © {new Date().getFullYear()} ALEPH. All rights reserved.
                </div>

                {/* Social Icons */}
                <div className="flex gap-5">
                    <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                    <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
                    </a>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#79FE77]" />
                    System Operational
                </div>
            </div>
        </motion.footer>
    );
}
