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
        <span ref={ref}>
            {display}{suffix}
        </span>
    );
}

const stats = [
    { value: 20, suffix: "+", label: "Automation Actions", sublabel: "In the Action Registry" },
    { value: 9, suffix: "", label: "Condition Types", sublabel: "Regex, size, date & more" },
    { value: 256, suffix: "-bit", label: "AES Encryption", sublabel: "Military-grade security" },
    { value: 3, suffix: "", label: "Languages", sublabel: "Español, English, Deutsch" },
];

export default function StatsSection() {
    return (
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-xl border border-[#444748]/10 p-12 md:p-16"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-[#C0C0C0] mb-2 font-[family-name:var(--font-space-grotesk)]">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-[#e9e9e9] font-medium mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-[#B0B0B0] font-mono">
                                {stat.sublabel}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
