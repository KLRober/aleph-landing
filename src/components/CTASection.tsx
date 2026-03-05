"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="mt-32 px-4 max-w-7xl mx-auto w-full mb-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center border border-white/10 relative overflow-hidden flex flex-col items-center justify-center"
            >
                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
                    Ready to build with ALEPH?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg relative z-10">
                    Join thousands of developers creating the future. Start your journey
                    with our next-gen framework today.
                </p>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-black text-lg font-bold h-14 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-slate-200 transition-all relative z-10"
                >
                    Deploy Now
                </motion.button>
            </motion.div>
        </section>
    );
}
