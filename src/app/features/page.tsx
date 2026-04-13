import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Features — ALEPH",
    description: "Explore all the powerful features that make ALEPH the ultimate file automation engine.",
};

const features = [
    {
        icon: "bolt",
        title: "Real-Time File Monitoring",
        description: "ALEPH continuously watches your designated directories with near-zero CPU overhead, detecting new files, modifications, and deletions the instant they happen.",
    },
    {
        icon: "account_tree",
        title: "Visual Rule Engine",
        description: "Build complex automation workflows using our intuitive rule builder. Combine triggers, conditions, and actions without writing a single line of code.",
    },
    {
        icon: "lock",
        title: "Local-First Architecture",
        description: "All processing happens on your machine. No cloud uploads, no external servers. Your files never leave your device — guaranteed privacy by design.",
    },
    {
        icon: "speed",
        title: "Zero-Latency Execution",
        description: "Our Rust-powered core processes file events in under 50ms. Actions execute immediately when conditions are met, with no queue delays.",
    },
    {
        icon: "palette",
        title: "Smart File Organization",
        description: "Automatically sort files by type, date, project, or custom metadata. Create folder structures that maintain themselves over time.",
    },
    {
        icon: "notifications_active",
        title: "Desktop Notifications",
        description: "Stay informed with configurable desktop notifications. Know exactly what ALEPH is doing and when, without constant monitoring.",
    },
    {
        icon: "terminal",
        title: "Extensible Plugin System",
        description: "Extend ALEPH's capabilities with custom plugins. Integrate with your existing tools and workflows through our plugin API.",
    },
    {
        icon: "schedule",
        title: "Scheduled Automations",
        description: "Set up time-based triggers to run automations on a schedule. Perfect for regular maintenance tasks like cleanup and archival.",
    },
    {
        icon: "backup",
        title: "Automatic Backups",
        description: "Configure automatic file backups before destructive operations. Never worry about accidentally losing important files again.",
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
