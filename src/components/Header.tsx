"use client";

import { motion } from "framer-motion";

export default function Header() {
    const navLinks = [
        { label: "Infrastructure", href: "#infrastructure", active: true },
        { label: "Files", href: "#files", active: false },
        { label: "Security", href: "#security", active: false },
        { label: "Docs", href: "#docs", active: false },
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
                <div className="text-xl font-bold tracking-tighter text-zinc-50 uppercase font-[family-name:var(--font-space-grotesk)]">
                    ALEPH V1
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-space-grotesk)] tracking-tight text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            className={
                                link.active
                                    ? "text-zinc-50 font-bold border-b border-zinc-50 pb-1"
                                    : "text-zinc-400 hover:text-zinc-200 transition-colors"
                            }
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="material-symbols-outlined text-zinc-400 hover:text-white transition-all">
                        search
                    </button>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-[#e9e9e9] text-[#003908] px-5 py-2 text-sm font-bold tracking-tight rounded-lg hover:bg-zinc-200 transition-all"
                    >
                        Try for free
                    </motion.button>
                </div>
            </motion.div>
        </nav>
    );
}
