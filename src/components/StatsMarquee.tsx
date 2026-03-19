"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatBarProps {
    label: string;
    value: string;
    numericValue: number;
    suffix?: string;
    barColor: string;
    barWidth: string;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-2xl md:text-3xl font-bold text-white stat-glow tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

function StatBar({ label, numericValue, suffix, barColor, barWidth }: StatBarProps) {
    return (
        <div className="flex-1 min-w-[200px]">
            <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.15em] uppercase">
                    {label}
                </span>
                <AnimatedCounter target={numericValue} suffix={suffix} />
            </div>
            <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`h-full rounded-full ${barColor}`}
                />
            </div>
        </div>
    );
}

export default function StatsMarquee() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full border-t border-b border-white/[0.04] py-8 mt-8"
        >
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <StatBar
                    label="Storage Optimized"
                    value="1,068"
                    numericValue={1068}
                    suffix="GB"
                    barColor="bg-green-500"
                    barWidth="78%"
                />
                <StatBar
                    label="Time Reclaimed"
                    value="450"
                    numericValue={450}
                    barColor="bg-violet-500"
                    barWidth="62%"
                />
                <StatBar
                    label="Latency Minimized"
                    value="0"
                    numericValue={0}
                    suffix=" Minutes"
                    barColor="bg-zinc-500"
                    barWidth="3%"
                />
            </div>
        </motion.section>
    );
}
