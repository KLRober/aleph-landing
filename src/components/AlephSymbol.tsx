"use client";

import { motion } from "framer-motion";

export default function AlephSymbol() {
    return (
        <div className="w-full lg:w-[40%] relative flex justify-center items-center h-[500px] lg:h-[700px] mt-12 lg:mt-0 z-10 pointer-events-none">
            {/* Background blur orbs */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] absolute translate-x-12 -translate-y-12" />
                <div className="w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] absolute -translate-x-12 translate-y-12" />
                <div className="w-64 h-64 bg-violet-500/5 rounded-full blur-[100px] absolute" />
            </div>

            {/* Main symbol container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center scale-150 opacity-90"
            >
                {/* Large Aleph (א) symbol */}
                <div
                    className="text-[280px] font-light text-transparent bg-clip-text bg-gradient-to-br from-white/30 to-white/5 drop-shadow-2xl select-none"
                    style={{ fontFamily: "serif" }}
                >
                    א
                </div>

                {/* Geometric SVG overlay */}
                <svg
                    className="absolute inset-0 m-auto opacity-40 mix-blend-screen"
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                >
                    <line x1="80" y1="80" x2="220" y2="220" stroke="white" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="90" y1="70" x2="230" y2="210" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                    <line x1="70" y1="90" x2="210" y2="230" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                    <line x1="200" y1="80" x2="150" y2="150" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="100" y1="220" x2="150" y2="150" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                    <polygon
                        points="150,150 200,80 220,220"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                    />
                    <polygon
                        points="150,150 100,220 80,80"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                    />
                </svg>

                {/* Colored nodes */}
                <div className="absolute top-[30%] right-[35%] w-1.5 h-1.5 rounded-full node-amber" />
                <div className="absolute top-[25%] right-[30%] w-1 h-1 rounded-full bg-white/50" />
                <div className="absolute top-[50%] left-[50%] w-2 h-2 rounded-full node-violet" />
                <div className="absolute bottom-[30%] left-[35%] w-1.5 h-1.5 rounded-full node-teal" />
                <div className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-white/50" />
                <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
                <div className="absolute bottom-[20%] right-[25%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
            </motion.div>
        </div>
    );
}
