import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Roadmap — ALEPH",
    description: "See what's coming next for ALEPH. Our public roadmap for upcoming features and improvements.",
};

const roadmapItems = [
    {
        quarter: "Q2 2026",
        status: "in-progress",
        items: [
            { title: "AI-Powered File Classification", description: "Use local ML models to automatically categorize files based on content, not just extension.", priority: "high" },
            { title: "Workflow Sharing & Import", description: "Export your automation rules and share them with the community. Import popular workflows in one click.", priority: "high" },
            { title: "Real-Time Dashboard Widgets", description: "Customizable dashboard with live metrics, file activity graphs, and rule execution history.", priority: "medium" },
        ],
    },
    {
        quarter: "Q3 2026",
        status: "planned",
        items: [
            { title: "Cross-Platform Sync", description: "Sync your rules and preferences across multiple machines using encrypted peer-to-peer synchronization.", priority: "high" },
            { title: "Advanced File Previews", description: "Inline preview support for documents, images, and code files within the ALEPH interface.", priority: "medium" },
            { title: "Conditional Branching", description: "If/else logic in automation workflows. Branch execution paths based on file content or metadata.", priority: "medium" },
        ],
    },
    {
        quarter: "Q4 2026",
        status: "exploring",
        items: [
            { title: "Mobile Companion App", description: "Monitor your automations and receive notifications on mobile. View file activity remotely.", priority: "low" },
            { title: "Third-Party Integrations", description: "Connect ALEPH with services like Notion, Slack, and email through secure, opt-in bridges.", priority: "medium" },
            { title: "Custom Scripting Engine", description: "Write automation logic in JavaScript or Python for maximum flexibility. Sandboxed execution environment.", priority: "high" },
        ],
    },
];

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
    "in-progress": { bg: "bg-[#C0C0C0]/10", text: "text-[#C0C0C0]", label: "In Progress" },
    planned: { bg: "bg-blue-500/10", text: "text-blue-400", label: "Planned" },
    exploring: { bg: "bg-purple-500/10", text: "text-purple-400", label: "Exploring" },
};

const priorityStyles: Record<string, string> = {
    high: "border-l-amber-400",
    medium: "border-l-zinc-500",
    low: "border-l-zinc-700",
};

export default function RoadmapPage() {
    return (
        <SubpageLayout
            title="Roadmap"
            subtitle="A transparent look at what we're building next. Priorities may shift based on community feedback."
            icon="map"
            lastUpdated="April 2026"
        >
            <div className="space-y-16">
                {roadmapItems.map((section) => {
                    const status = statusStyles[section.status];
                    return (
                        <div key={section.quarter}>
                            <div className="flex items-center gap-3 mb-6">
                                <h2 className="text-2xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
                                    {section.quarter}
                                </h2>
                                <span className={`${status.bg} ${status.text} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
                                    {status.label}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {section.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className={`p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 border-l-2 ${priorityStyles[item.priority]} hover:bg-zinc-900/50 transition-all`}
                                    >
                                        <h3 className="text-sm font-semibold text-zinc-100 mb-2 font-[family-name:var(--font-space-grotesk)]">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-16 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 text-center">
                <p className="text-zinc-400 text-sm mb-3">Have a feature request?</p>
                <button className="bg-zinc-800 text-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
                    Submit Feedback on GitHub
                </button>
            </div>
        </SubpageLayout>
    );
}
