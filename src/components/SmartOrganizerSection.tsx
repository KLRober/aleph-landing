"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

function SmartOrganizerCard() {
    const directories = [
        { name: "Documents/", indent: 0, type: "folder" },
        { name: "invoices_2024.pdf", indent: 1, type: "file" },
        { name: "contract_v3.docx", indent: 1, type: "file" },
        { name: "Images/", indent: 0, type: "folder" },
        { name: "screenshot_031.png", indent: 1, type: "file" },
        { name: "Backups/", indent: 0, type: "folder" },
    ];

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 lg:p-8 flex flex-col gap-5 flex-1"
        >
            <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                    Smart Organizer
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Diagnóstico y limpieza profunda de directorios con detección de
                    redundancia.
                </p>
            </div>

            {/* Directory tree */}
            <div className="bg-zinc-950 rounded-lg border border-white/[0.04] p-4 font-mono text-[11px]">
                {directories.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-2 py-1"
                        style={{ paddingLeft: `${item.indent * 16}px` }}
                    >
                        <span className={`material-symbols-outlined text-[14px] ${item.type === "folder"
                            ? "text-amber-500/60"
                            : "text-zinc-600"
                            }`}>
                            {item.type === "folder" ? "folder" : "description"}
                        </span>
                        <span className={item.type === "folder" ? "text-zinc-300" : "text-zinc-500"}>
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Scan progress */}
            <div className="flex items-center gap-3">
                <div className="flex-1 h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 opacity-70"
                    />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">72% scanned</span>
            </div>
        </motion.div>
    );
}

function MetadataCleaningCard() {
    const fields = [
        { label: "GPS Location", status: "cleaned", icon: "location_off" },
        { label: "Author Info", status: "cleaned", icon: "person_off" },
        { label: "Device Model", status: "cleaning", icon: "devices" },
        { label: "Timestamps", status: "pending", icon: "schedule" },
    ];

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.005 }}
            className="bento-card p-6 lg:p-8 flex flex-col gap-5 flex-1"
        >
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-[16px] text-emerald-500/70">
                            shield
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500/60 tracking-[0.15em] uppercase">
                            Privacy Guard
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        Metadata Cleaning
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        Borra rastros GPS, autoría y hardware de cada archivo antes de
                        compartir.
                    </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-zinc-400">
                        open_in_new
                    </span>
                </div>
            </div>

            {/* Metadata fields */}
            <div className="flex flex-col gap-2.5 mt-1">
                {fields.map((field) => (
                    <div
                        key={field.label}
                        className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-zinc-950/80 border border-white/[0.03]"
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-[14px] text-zinc-500">
                                {field.icon}
                            </span>
                            <span className="text-[11px] font-mono text-zinc-400">
                                {field.label}
                            </span>
                        </div>
                        <span
                            className={`text-[9px] font-mono tracking-wider uppercase ${field.status === "cleaned"
                                ? "text-emerald-500/70"
                                : field.status === "cleaning"
                                    ? "text-amber-500/70"
                                    : "text-zinc-600"
                                }`}
                        >
                            {field.status === "cleaning" ? (
                                <span className="flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                                    Cleaning…
                                </span>
                            ) : (
                                field.status
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function SmartOrganizerSection() {
    return (
        <section className="px-4 max-w-5xl mx-auto w-full mt-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col lg:flex-row gap-4"
            >
                <SmartOrganizerCard />
                <MetadataCleaningCard />
            </motion.div>
        </section>
    );
}
