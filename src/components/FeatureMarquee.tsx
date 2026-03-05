"use client";

export default function FeatureMarquee() {
    return (
        <div className="fixed bottom-0 left-0 right-0 glass-card border-t border-white/10 py-3 overflow-hidden bg-[#050505]/90 z-40 backdrop-blur-xl">
            <div
                className="flex whitespace-nowrap font-mono text-sm font-bold text-white tracking-widest uppercase"
                style={{ animation: "marquee 20s linear infinite" }}
            >
                <span className="mx-6 text-slate-500">•</span> Intelligent File Organizer
                <span className="mx-6 text-slate-500">•</span> Advanced PDF Toolkit
                <span className="mx-6 text-slate-500">•</span> Security Log Parser
                <span className="mx-6 text-slate-500">•</span> Local Backups
                <span className="mx-6 text-slate-500">•</span> Image Optimizer
                <span className="mx-6 text-slate-500">•</span> Intelligent File Organizer
                <span className="mx-6 text-slate-500">•</span> Advanced PDF Toolkit
                <span className="mx-6 text-slate-500">•</span> Security Log Parser
                <span className="mx-6 text-slate-500">•</span> Local Backups
                <span className="mx-6 text-slate-500">•</span> Image Optimizer
            </div>
        </div>
    );
}
