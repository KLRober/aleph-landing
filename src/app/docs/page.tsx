import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Documentation — ALEPH",
    description: "Complete documentation for ALEPH. Learn how to set up, configure, and master file automation.",
};

const sections = [
    {
        icon: "rocket_launch",
        title: "Quick Start",
        description: "Get ALEPH up and running in under 5 minutes. Install, configure your first rule, and watch it work.",
        links: ["Installation Guide", "Your First Rule", "Basic Configuration"],
    },
    {
        icon: "settings",
        title: "Configuration",
        description: "Deep dive into ALEPH's configuration options. Customize every aspect to match your workflow.",
        links: ["Global Settings", "Directory Watchers", "Notification Preferences", "Performance Tuning"],
    },
    {
        icon: "account_tree",
        title: "Rule Engine",
        description: "Master the rule engine. Learn about triggers, conditions, actions, and how to combine them.",
        links: ["Triggers Reference", "Conditions & Filters", "Actions Library", "Rule Templates"],
    },
    {
        icon: "extension",
        title: "Plugins",
        description: "Extend ALEPH with plugins. Learn how to install, manage, and create your own plugins.",
        links: ["Plugin Marketplace", "Installing Plugins", "Creating Plugins", "Plugin API"],
    },
    {
        icon: "build",
        title: "Advanced Usage",
        description: "Advanced workflows, scripting integration, and power-user features for complex automation.",
        links: ["Custom Scripts", "Chaining Rules", "Conditional Logic", "Error Handling"],
    },
    {
        icon: "help",
        title: "Troubleshooting",
        description: "Common issues and their solutions. Debug your automation rules and resolve conflicts.",
        links: ["Common Errors", "Log Files", "Rule Debugging", "Performance Issues"],
    },
];

export default function DocsPage() {
    return (
        <SubpageLayout
            title="Documentation"
            subtitle="Everything you need to know about ALEPH. From installation to advanced automation workflows."
            icon="menu_book"
            lastUpdated="April 2026"
        >
            {/* Search */}
            <div className="mb-12">
                <div className="relative max-w-xl">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xl">search</span>
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-[#C0C0C0]/30 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">
                        ⌘K
                    </span>
                </div>
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className="group p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-[#C0C0C0]/20 hover:bg-zinc-900/50 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#C0C0C0]/10 border border-[#C0C0C0]/20 flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-xl">{section.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-2 font-[family-name:var(--font-space-grotesk)]">
                            {section.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                            {section.description}
                        </p>
                        <div className="space-y-2">
                            {section.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="flex items-center gap-2 text-xs text-zinc-500 hover:text-[#C0C0C0] transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SubpageLayout>
    );
}
