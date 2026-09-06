"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type PresetId = "pdf" | "photo" | "backup";

interface PipelineStep {
    id: string;
    type: "trigger" | "condition" | "action";
    typeLabel: string;
    name: string;
    detail: string;
    icon: string;
    accent: string;
}

interface PipelinePreset {
    id: PresetId;
    title: string;
    icon: string;
    tagline: string;
    incomingFile: {
        name: string;
        size: string;
        type: string;
    };
    steps: PipelineStep[];
    logs: string[];
    result: {
        duration: string;
        saved: string;
        summary: string;
    };
}

const PRESETS: Record<PresetId, PipelinePreset> = {
    pdf: {
        id: "pdf",
        title: "PDF Organizer",
        icon: "description",
        tagline: "Watch Downloads → Compress → Sort to Archive",
        incomingFile: {
            name: "invoice_march_2026.pdf",
            size: "3.8 MB",
            type: "application/pdf",
        },
        steps: [
            {
                id: "step-1",
                type: "trigger",
                typeLabel: "TRIGGER",
                name: "Folder Watcher",
                detail: "~/Downloads",
                icon: "folder_open",
                accent: "#10b981",
            },
            {
                id: "step-2",
                type: "condition",
                typeLabel: "CONDITION",
                name: "Rule Filter",
                detail: "*.pdf AND > 1.0 MB",
                icon: "filter_alt",
                accent: "#38bdf8",
            },
            {
                id: "step-3",
                type: "action",
                typeLabel: "ACTION 1",
                name: "Smart Compression",
                detail: "High Quality (-64%)",
                icon: "compress",
                accent: "#a855f7",
            },
            {
                id: "step-4",
                type: "action",
                typeLabel: "ACTION 2",
                name: "Move to Archive",
                detail: "/Documents/Archive/2026/",
                icon: "drive_file_move",
                accent: "#f59e0b",
            },
        ],
        logs: [
            "14:32:01.12 [DETECT] 'invoice_march_2026.pdf' caught by watcher in ~/Downloads",
            "14:32:01.24 [VERIFY] Matched condition: .pdf extension, size 3.8 MB > 1.0 MB",
            "14:32:01.39 [EXEC] Compressed PDF: 3.8 MB → 1.4 MB without visual degradation",
            "14:32:01.48 [DONE] Moved to /Documents/Archive/2026/ with integrity check",
        ],
        result: {
            duration: "36ms",
            saved: "2.4 MB saved",
            summary: "Compressed by 64% and archived cleanly",
        },
    },
    photo: {
        id: "photo",
        title: "Photo Privacy",
        icon: "photo_camera",
        tagline: "Camera Import → Strip GPS EXIF → Convert to WebP",
        incomingFile: {
            name: "IMG_2847_camera.jpg",
            size: "12.4 MB",
            type: "image/jpeg",
        },
        steps: [
            {
                id: "step-1",
                type: "trigger",
                typeLabel: "TRIGGER",
                name: "Folder Watcher",
                detail: "~/Pictures/Camera",
                icon: "photo_camera",
                accent: "#10b981",
            },
            {
                id: "step-2",
                type: "condition",
                typeLabel: "CONDITION",
                name: "Privacy Scan",
                detail: "Contains GPS or EXIF",
                icon: "location_off",
                accent: "#38bdf8",
            },
            {
                id: "step-3",
                type: "action",
                typeLabel: "ACTION 1",
                name: "Strip Metadata",
                detail: "Wipe GPS, camera, timestamps",
                icon: "cleaning_services",
                accent: "#a855f7",
            },
            {
                id: "step-4",
                type: "action",
                typeLabel: "ACTION 2",
                name: "Convert to WebP",
                detail: "Lossless WebP (-45%)",
                icon: "transform",
                accent: "#f59e0b",
            },
        ],
        logs: [
            "16:05:10.02 [DETECT] 'IMG_2847_camera.jpg' detected from camera card sync",
            "16:05:10.15 [VERIFY] EXIF inspector flagged embedded GPS coordinates & lens metadata",
            "16:05:10.28 [EXEC] Scrubbed GPS & serial headers via local sanitizer",
            "16:05:10.35 [DONE] Converted to WebP format: 12.4 MB → 6.8 MB cleanly",
        ],
        result: {
            duration: "33ms",
            saved: "5.6 MB saved",
            summary: "Location scrubbed and converted to WebP",
        },
    },
    backup: {
        id: "backup",
        title: "Local Vault Backup",
        icon: "enhanced_encryption",
        tagline: "Scheduled Timer → Delta Check → AES-256 Encrypt",
        incomingFile: {
            name: "contracts_bundle_2026.tar",
            size: "148 MB",
            type: "application/x-tar",
        },
        steps: [
            {
                id: "step-1",
                type: "trigger",
                typeLabel: "TRIGGER",
                name: "Schedule Timer",
                detail: "Daily at 23:00",
                icon: "schedule",
                accent: "#10b981",
            },
            {
                id: "step-2",
                type: "condition",
                typeLabel: "CONDITION",
                name: "Delta Check",
                detail: "Files modified in last 24h",
                icon: "difference",
                accent: "#38bdf8",
            },
            {
                id: "step-3",
                type: "action",
                typeLabel: "ACTION 1",
                name: "AES-256 Encrypt",
                detail: "Hardware-accelerated cipher",
                icon: "lock",
                accent: "#a855f7",
            },
            {
                id: "step-4",
                type: "action",
                typeLabel: "ACTION 2",
                name: "Mirror to Vault",
                detail: "/EncryptedVault/Drive/",
                icon: "shield",
                accent: "#f59e0b",
            },
        ],
        logs: [
            "23:00:00.01 [TIMER] Nightly schedule trigger fired for configured directories",
            "23:00:00.18 [VERIFY] Delta inspection identified 14 modified files in project tree",
            "23:00:00.44 [EXEC] Generated AES-256-GCM container using local key (no cloud)",
            "23:00:00.67 [DONE] Mirrored snapshot to secondary offline drive with SHA-256 seal",
        ],
        result: {
            duration: "67ms",
            saved: "100% offline",
            summary: "AES-256 encrypted local snapshot complete",
        },
    },
};

export default function BentoGrid() {
    const [selectedPreset, setSelectedPreset] = useState<PresetId>("pdf");
    const [activeStep, setActiveStep] = useState<number>(-1);
    const [isSimulating, setIsSimulating] = useState<boolean>(false);
    const [selectedNodeIndex, setSelectedNodeIndex] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const preset = PRESETS[selectedPreset];

    // Reset simulation when preset changes
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsSimulating(false);
        setActiveStep(-1);
        setSelectedNodeIndex(null);
    }, [selectedPreset]);

    const runSimulation = () => {
        if (isSimulating) return;
        setIsSimulating(true);
        setActiveStep(0);

        // Sequence steps with clean timeouts
        timerRef.current = setTimeout(() => {
            setActiveStep(1);
            timerRef.current = setTimeout(() => {
                setActiveStep(2);
                timerRef.current = setTimeout(() => {
                    setActiveStep(3);
                    timerRef.current = setTimeout(() => {
                        setActiveStep(4); // Finished
                        setIsSimulating(false);
                    }, 550);
                }, 550);
            }, 550);
        }, 550);
    };

    return (
        <section id="infrastructure" className="py-24 px-8 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-[#333842]/50 rounded-full px-4 py-1.5 mb-4">
                    <span className="w-2 h-2 rounded-full bg-white status-dot-pulse" />
                    <span className="text-xs font-mono text-[#9ca3af] tracking-wider uppercase">
                        Core Engine
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e9e9e9] font-[family-name:var(--font-outfit)] tracking-tight mb-4">
                    Automation Engine
                </h2>
                <p className="text-[#9ca3af] max-w-2xl mx-auto text-lg leading-relaxed">
                    Build rules with Trigger → Condition → Action without code. Select a preset or run a simulation to see how ALEPH executes pipelines in milliseconds.
                </p>
            </motion.div>

            {/* ── Interactive Pipeline Studio (Centerpiece) ── */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-3xl border border-[#333842]/40 p-6 md:p-10 mb-8 relative overflow-hidden shadow-2xl bg-[#0d0f14]/90"
            >
                {/* Ambient dynamic radial glow */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

                {/* Top Controls Toolbar */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#333842]/20 relative z-10">
                    {/* Preset Tabs */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-[#777] uppercase tracking-wider mr-2 hidden sm:inline">
                            Presets:
                        </span>
                        {(Object.keys(PRESETS) as PresetId[]).map((key) => {
                            const p = PRESETS[key];
                            const isSelected = selectedPreset === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setSelectedPreset(key)}
                                    className={`px-4 py-2 rounded-xl font-[family-name:var(--font-outfit)] text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                                        isSelected
                                            ? "bg-white text-zinc-950 shadow-md font-semibold"
                                            : "bg-[#181b22] text-[#9ca3af] hover:text-white hover:bg-[#20242e] border border-[#333842]/30"
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-base">
                                        {p.icon}
                                    </span>
                                    {p.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-xs font-mono text-[#888] hidden md:block">
                            <span className="text-zinc-400 font-semibold">{preset.tagline}</span>
                        </div>

                        <motion.button
                            onClick={runSimulation}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={isSimulating}
                            className={`px-5 py-2.5 rounded-xl font-bold tracking-tight text-sm flex items-center gap-2 transition-all shadow-lg ${
                                isSimulating
                                    ? "bg-zinc-700 text-zinc-300 cursor-not-allowed"
                                    : "accent-button text-zinc-950 glow-button"
                            }`}
                        >
                            <span className={`material-symbols-outlined text-lg ${isSimulating ? "animate-spin" : ""}`}>
                                {isSimulating ? "progress_activity" : "play_arrow"}
                            </span>
                            {isSimulating ? "Simulating…" : "Run Simulation"}
                        </motion.button>
                    </div>
                </div>

                {/* Simulated File Banner */}
                <div className="pt-6 pb-8 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm text-zinc-300">
                                draft
                            </span>
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[#777] uppercase tracking-wider">
                                File Event Input
                            </div>
                            <div className="text-sm font-mono text-zinc-200 flex items-center gap-2">
                                <span>{preset.incomingFile.name}</span>
                                <span className="text-xs text-[#666]">({preset.incomingFile.size})</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse" />
                        <span className="text-xs font-mono text-[#888]">
                            {isSimulating
                                ? `Processing step ${Math.min(activeStep + 1, 4)} of 4…`
                                : activeStep === 4
                                ? "Pipeline executed successfully"
                                : "Ready for event"}
                        </span>
                    </div>
                </div>

                {/* ── Node Visual Flow (Interactive Pipeline) ── */}
                <div className="relative py-6 z-10">
                    {/* Desktop Connecting SVG Wire */}
                    <div className="hidden lg:block absolute top-[52%] left-[10%] right-[10%] -translate-y-1/2 pointer-events-none z-0">
                        <svg className="w-full h-12" preserveAspectRatio="none">
                            <line
                                x1="0%"
                                y1="50%"
                                x2="100%"
                                y2="50%"
                                stroke="rgba(51, 56, 66, 0.4)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                            />
                            {/* Animated Active Progress Line */}
                            {activeStep >= 0 && (
                                <line
                                    x1="0%"
                                    y1="50%"
                                    x2={`${Math.min((activeStep / 3) * 100, 100)}%`}
                                    y2="50%"
                                    stroke="url(#wireGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="transition-all duration-500 ease-out"
                                />
                            )}
                            <defs>
                                <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="50%" stopColor="#38bdf8" />
                                    <stop offset="100%" stopColor="#f59e0b" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Nodes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                        {preset.steps.map((step, index) => {
                            const isCurrent = activeStep === index;
                            const isDone = activeStep > index || activeStep === 4;
                            const isSelected = selectedNodeIndex === index;

                            return (
                                <motion.div
                                    key={step.id}
                                    onClick={() => setSelectedNodeIndex(isSelected ? null : index)}
                                    whileHover={{ y: -4 }}
                                    className={`rounded-2xl p-5 border transition-all duration-300 cursor-pointer relative bg-[#12141a]/90 backdrop-blur-md ${
                                        isCurrent
                                            ? "border-white/50 shadow-[0_0_25px_rgba(255,255,255,0.15)] ring-1 ring-white/30"
                                            : isDone
                                            ? "border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                                            : isSelected
                                            ? "border-zinc-400 bg-[#171922]"
                                            : "border-[#333842]/30 hover:border-[#333842]/70"
                                    }`}
                                >
                                    {/* Type badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className="text-[10px] font-mono tracking-widest font-semibold px-2 py-0.5 rounded border"
                                            style={{
                                                borderColor: `${step.accent}30`,
                                                backgroundColor: `${step.accent}10`,
                                                color: step.accent,
                                            }}
                                        >
                                            {step.typeLabel}
                                        </span>

                                        {/* Status indicator */}
                                        <div className="flex items-center gap-1.5">
                                            {isCurrent ? (
                                                <span className="flex items-center gap-1 text-[10px] font-mono text-white animate-pulse">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                                    Running…
                                                </span>
                                            ) : isDone ? (
                                                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                                                    <span className="material-symbols-outlined text-xs">
                                                        check_circle
                                                    </span>
                                                    Done
                                                </span>
                                            ) : (
                                                <span className="text-[10px] font-mono text-[#555]">
                                                    Ready
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300"
                                            style={{
                                                backgroundColor: `${step.accent}15`,
                                                border: `1px solid ${step.accent}30`,
                                            }}
                                        >
                                            <span
                                                className="material-symbols-outlined text-xl"
                                                style={{ color: step.accent }}
                                            >
                                                {step.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#e9e9e9] font-[family-name:var(--font-outfit)]">
                                                {step.name}
                                            </h4>
                                            <p className="text-xs font-mono text-[#9ca3af]">
                                                {step.detail}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle interactive hint */}
                                    <div className="pt-2 mt-2 border-t border-[#333842]/20 flex items-center justify-between text-[11px] font-mono text-[#666]">
                                        <span>Step 0{index + 1}</span>
                                        <span className="hover:text-zinc-300 transition-colors">
                                            {isSelected ? "Hide details ↑" : "Inspect ↓"}
                                        </span>
                                    </div>

                                    {/* Expanded Node Details */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden pt-3 mt-2 border-t border-white/10 text-xs text-[#aaa] space-y-1"
                                            >
                                                <div className="text-[11px] text-[#777]">Configured parameters:</div>
                                                <div className="font-mono text-[11px] text-zinc-300 bg-black/40 p-2 rounded border border-white/5">
                                                    target: {step.detail}
                                                    <br />
                                                    action_bus: parallel_safe
                                                    <br />
                                                    rollback_enabled: true
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Real-Time Console & Result Toast ── */}
                <div className="mt-8 pt-6 border-t border-[#333842]/20 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center relative z-10">
                    {/* Live log stream */}
                    <div className="lg:col-span-2 font-mono text-xs text-[#888] space-y-1 bg-[#090a0d] p-4 rounded-xl border border-[#333842]/30 min-h-[85px] flex flex-col justify-center">
                        {activeStep === -1 ? (
                            <div className="flex items-center gap-2 text-[#555]">
                                <span className="material-symbols-outlined text-sm">terminal</span>
                                <span>Pipeline idle. Click &apos;Run Simulation&apos; or pick a preset to watch events flow.</span>
                            </div>
                        ) : (
                            preset.logs.slice(0, Math.max(activeStep, 1)).map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-[#aaa] flex items-center gap-2"
                                >
                                    <span className="text-emerald-400/80">❯</span>
                                    <span>{log}</span>
                                </motion.div>
                            ))
                        )}
                    </div>

                    {/* Result Summary Pill */}
                    <div className="lg:col-span-1 flex flex-col justify-center bg-white/[0.02] p-4 rounded-xl border border-white/10">
                        <div className="text-[11px] font-mono text-[#777] uppercase tracking-wider mb-1">
                            Execution Benchmark
                        </div>
                        <div className="text-xl font-bold text-white font-[family-name:var(--font-outfit)] flex items-center gap-2">
                            <span>{preset.result.duration}</span>
                            <span className="text-xs font-mono text-emerald-400 font-normal bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                                {preset.result.saved}
                            </span>
                        </div>
                        <div className="text-xs text-[#9ca3af] mt-1">
                            {preset.result.summary}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── Supporting Bento Grid Cards (Trio) ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Feature 1 — Privacy Vault */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-panel rounded-2xl p-8 border border-[#333842]/30 card-hover-glow transition-transform duration-300"
                >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                        <span className="material-symbols-outlined text-white text-xl">
                            security
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                        Privacy Vault
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Strip camera EXIF and GPS tags, encrypt local archives with AES-256-GCM, and securely shred files with DoD 5220.22-M multi-pass overwrite.
                    </p>
                </motion.div>

                {/* Feature 2 — Real-Time Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-panel rounded-2xl p-8 border border-[#333842]/30 card-hover-glow transition-transform duration-300"
                >
                    <div className="w-10 h-10 rounded-lg bg-[#9ca3af]/10 border border-white/10 flex items-center justify-center mb-5">
                        <span className="material-symbols-outlined text-[#9ca3af] text-xl">
                            analytics
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                        Real-Time Dashboard
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Live system status: files organized, storage reclaimed, running rules, local Security Health Score, and activity audit feed.
                    </p>
                </motion.div>

                {/* Feature 3 — File Optimizer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glass-panel rounded-2xl p-8 border border-[#333842]/30 card-hover-glow transition-transform duration-300"
                >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                        <span className="material-symbols-outlined text-white text-xl">
                            integration_instructions
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#e9e9e9] mb-2 font-[family-name:var(--font-outfit)]">
                        File Optimizer
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Smart local file explorer with SHA-256 duplicate detection, disk usage visual treemap, metadata inspector, and batch directory sorting.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
