"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";

interface SubpageLayoutProps {
    title: string;
    subtitle: string;
    icon: string;
    children: React.ReactNode;
    lastUpdated?: string;
}

export default function SubpageLayout({ title, subtitle, icon, children, lastUpdated }: SubpageLayoutProps) {
    return (
        <main className="flex min-h-screen flex-col bg-[#121414] text-[#e5e2e1] relative">
            {/* Watermark */}
            <div className="aleph-watermark select-none" aria-hidden="true">ℵ</div>

            {/* Minimal Header */}
            <nav className="sticky top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-xl bg-gradient-to-b from-zinc-800/10 to-transparent">
                <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-50 uppercase font-[family-name:var(--font-space-grotesk)]">
                        ALEPH V1
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-[family-name:var(--font-space-grotesk)]"
                    >
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Banner */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative py-20 md:py-28 px-8 border-b border-zinc-900"
            >
                {/* Background glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C0C0C0]/5 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-screen-lg mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#C0C0C0]/10 border border-[#C0C0C0]/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-xl">{icon}</span>
                        </div>
                        {lastUpdated && (
                            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800/50">
                                Last updated: {lastUpdated}
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-50 font-[family-name:var(--font-space-grotesk)] mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </motion.section>

            {/* Content */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex-1 px-8 py-16 md:py-20"
            >
                <div className="max-w-screen-lg mx-auto prose-invert">
                    {children}
                </div>
            </motion.section>

            <Footer />
        </main>
    );
}
