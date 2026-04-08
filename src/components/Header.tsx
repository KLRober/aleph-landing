"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Docs", href: "#docs" },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-xl bg-gradient-to-b from-zinc-800/10 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto"
            >
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tighter text-zinc-50 uppercase font-[family-name:var(--font-space-grotesk)]">
                    ALEPH V1
                </a>

                {/* Nav links — desktop */}
                <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-space-grotesk)] tracking-tight text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            className="text-zinc-400 hover:text-zinc-200 transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-[#e9e9e9] text-[#003908] px-5 py-2 text-sm font-bold tracking-tight rounded-lg hover:bg-zinc-200 transition-all hidden sm:block"
                    >
                        Try for free
                    </motion.button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-zinc-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            {mobileOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden border-t border-zinc-800/50"
                    >
                        <div className="px-8 py-6 flex flex-col gap-4 bg-zinc-950/90 backdrop-blur-xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-zinc-300 hover:text-white transition-colors font-[family-name:var(--font-space-grotesk)] text-lg"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-zinc-800/50">
                                <button className="w-full bg-[#79FE77] text-[#003908] py-3 font-bold tracking-tight rounded-lg">
                                    Download Free
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
