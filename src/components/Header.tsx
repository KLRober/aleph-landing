"use client";

import { motion } from "framer-motion";

export default function Header() {
    const navLinks = [
        { label: "Infrastructure", href: "#infrastructure", active: true },
        { label: "Security", href: "#security", active: false },
        { label: "Protocols", href: "#protocols", active: false },
        { label: "Pricing", href: "#pricing", active: false },
        { label: "Docs", href: "#docs", active: false },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-nav rounded-full px-6 py-2.5 flex items-center justify-between w-full max-w-5xl"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-400">ℵ</span>
                    <span className="text-sm font-bold tracking-tight text-white uppercase">
                        ALEPH
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                        V1
                    </span>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-7 text-[13px] font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            className={`transition-colors duration-200 ${
                                link.active
                                    ? "text-white underline underline-offset-4 decoration-green-500/50"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-black text-xs font-semibold py-1.5 px-4 rounded-full transition-colors hover:bg-zinc-200"
                >
                    Try it for free
                </motion.button>
            </motion.nav>
        </header>
    );
}
