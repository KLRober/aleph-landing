"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.floor(v));
    const [display, setDisplay] = useState("0");
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (v) => {
            setDisplay(v.toLocaleString());
        });
        return unsubscribe;
    }, [rounded]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate(count, target, { duration: 2, ease: "easeOut" });
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [count, target]);

    return (
        <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
            {display}{suffix}
        </span>
    );
}

const stats = [
    { value: 20, suffix: "+", label: "Automation Actions", sublabel: "In the Action Registry", accent: "#ffffff" },
    { value: 9, suffix: "", label: "Condition Types", sublabel: "Regex, size, date & more", accent: "#9ca3af" },
    { value: 256, suffix: "-bit", label: "AES Encryption", sublabel: "Backup encryption", accent: "#ffffff" },
    { value: 3, suffix: "", label: "Languages", sublabel: "Español, English, Deutsch", accent: "#9ca3af" },
];

export default function StatsSection() {
    return (
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-2xl border border-[#333842]/30 p-12 md:p-16 relative overflow-hidden"
            >
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.015),transparent_60%)]" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.08 }}
                            className="text-center p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/10 group cursor-default"
                        >
                            <div
                                className="text-4xl md:text-5xl font-bold mb-2 font-[family-name:var(--font-outfit)] group-hover:scale-105 transition-transform duration-300"
                                style={{ color: stat.accent }}
                            >
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-[#e9e9e9] font-medium mb-1 group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                            <div className="text-xs text-[#9ca3af] font-mono">
                                {stat.sublabel}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
