"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass-nav rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl shadow-lg shadow-black/40"
            >
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">
                        ALEPH
                    </span>
                </div>

                {/* Center: Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <a className="hover:text-white transition-colors" href="#features">Features</a>
                    <a className="hover:text-white transition-colors" href="#docs">Docs</a>
                    <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
                    <a className="hover:text-white transition-colors" href="#blog">Blog</a>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    <a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
                        Log in
                    </a>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white text-black hover:bg-slate-200 text-sm font-bold py-2 px-5 rounded-full transition-colors"
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.nav>
        </div>
    );
}
