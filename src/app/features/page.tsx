import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Features — ALEPH",
    description: "Explore all the powerful features that make ALEPH the ultimate file automation engine.",
};

const features = [
    {
        icon: "bolt",
        title: "Automation Engine",
        description: "The core of ALEPH. Create rules with Trigger → Condition → Action. Chain actions into pipelines that run automatically when files arrive — compress, move, rename, notify, and more. 20+ actions across 5 categories.",
    },
    {
        icon: "folder_open",
        title: "File Optimizer",
        description: "Visual file explorer with built-in organization tools: auto-sort by extension, pack files, file inspector with hash/EXIF/PDF metadata, SHA-256 duplicate detection, disk usage treemap, and smart search with advanced filters.",
    },
    {
        icon: "description",
        title: "Document Studio",
        description: "Complete PDF processing suite: compress with 3 quality levels (web/balanced/print), merge multiple PDFs, split by page, rotate, reorder pages, and add configurable text watermarks.",
    },
    {
        icon: "image",
        title: "Image Studio",
        description: "Batch image processing with 8 parallel workers: format conversion (JPG, PNG, WebP, BMP, TIFF), auto-enhance, smart compression, watermarking, social media resize, and AI background removal with rembg.",
    },
    {
        icon: "shield",
        title: "Security Center",
        description: "AES-256 encrypted backups, incremental backup with manifests, backup restoration, EXIF/GPS metadata stripping, DoD 5220.22-M secure shred, SHA-256/512 hash calculator, integrity manifests, and Security Health Score (A-D grading).",
    },
    {
        icon: "search",
        title: "OCR & Deep Search",
        description: "Extract text from images and scanned PDFs using Tesseract (Spanish + English). Build a local search index and find content inside documents — not just by filename. Auto-indexes new files detected by the watcher.",
    },
    {
        icon: "lock",
        title: "100% Local & Private",
        description: "All processing happens on your machine. Zero cloud uploads. Works fully offline in Sovereign Mode — only needs internet for authentication and Stripe payments. Your files never leave your disk.",
    },
    {
        icon: "dashboard",
        title: "Real-Time Dashboard",
        description: "Live metrics panel showing disk storage, RAM usage, system info, active rules, files processed, space saved, Security Health Score, action breakdown, and recent activity feed — all with 30-second cache for performance.",
    },
    {
        icon: "terminal",
        title: "Command Palette & System Tray",
        description: "Spotlight-like command palette accessible via global hotkey. System tray icon with quick actions: organize files, pause automation, check watcher status. ALEPH is always one click or keystroke away.",
    },
];

export default function FeaturesPage() {
    return (
        <SubpageLayout
            title="Features"
            subtitle="Everything you need to automate your file system with precision, speed, and absolute privacy."
            icon="star"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-[#C0C0C0]/20 hover:bg-zinc-900/50 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#C0C0C0]/10 border border-[#C0C0C0]/20 flex items-center justify-center mb-4 group-hover:bg-[#C0C0C0]/15 transition-colors">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-xl">{feature.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-2 font-[family-name:var(--font-space-grotesk)]">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </SubpageLayout>
    );
}
