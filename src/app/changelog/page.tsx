import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Changelog — ALEPH",
    description: "Stay up to date with the latest improvements, fixes, and features in ALEPH.",
};

const releases = [
    {
        version: "1.4.0",
        date: "April 8, 2026",
        tag: "Latest",
        changes: [
            { type: "feature", text: "Added scheduled automation triggers with cron-like syntax" },
            { type: "feature", text: "New template library with 20+ pre-built automation workflows" },
            { type: "improvement", text: "Rule engine performance improved by 3x for complex condition chains" },
            { type: "fix", text: "Fixed file watcher memory leak on directories with 10k+ files" },
        ],
    },
    {
        version: "1.3.2",
        date: "March 22, 2026",
        tag: null,
        changes: [
            { type: "fix", text: "Resolved race condition in concurrent file move operations" },
            { type: "fix", text: "Fixed notification stacking on Windows 11" },
            { type: "improvement", text: "Reduced startup time by 40% with lazy module loading" },
        ],
    },
    {
        version: "1.3.0",
        date: "March 10, 2026",
        tag: null,
        changes: [
            { type: "feature", text: "Introduced plugin system with custom action support" },
            { type: "feature", text: "Added bulk file rename with pattern matching" },
            { type: "improvement", text: "Redesigned rule builder with drag-and-drop condition ordering" },
            { type: "fix", text: "Fixed incorrect file size calculation for symlinked directories" },
        ],
    },
    {
        version: "1.2.0",
        date: "February 15, 2026",
        tag: null,
        changes: [
            { type: "feature", text: "Multi-directory watch support" },
            { type: "feature", text: "Desktop notification actions (quick undo)" },
            { type: "improvement", text: "SQLite database migration for better reliability" },
            { type: "fix", text: "Fixed Unicode filename handling on macOS" },
        ],
    },
    {
        version: "1.1.0",
        date: "January 28, 2026",
        tag: null,
        changes: [
            { type: "feature", text: "Initial release of the visual rule builder" },
            { type: "feature", text: "Basic file operations: move, copy, rename, delete" },
            { type: "feature", text: "System tray integration with quick access panel" },
        ],
    },
];

const typeColors: Record<string, { bg: string; text: string; label: string }> = {
    feature: { bg: "bg-[#C0C0C0]/10", text: "text-[#C0C0C0]", label: "NEW" },
    improvement: { bg: "bg-blue-500/10", text: "text-blue-400", label: "IMPROVED" },
    fix: { bg: "bg-amber-500/10", text: "text-amber-400", label: "FIX" },
};

export default function ChangelogPage() {
    return (
        <SubpageLayout
            title="Changelog"
            subtitle="Track every improvement, new feature, and bug fix across ALEPH releases."
            icon="history"
            lastUpdated="April 8, 2026"
        >
            <div className="space-y-12">
                {releases.map((release) => (
                    <div key={release.version} className="relative pl-8 border-l border-zinc-800">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-600" />

                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
                                v{release.version}
                            </h3>
                            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                {release.date}
                            </span>
                            {release.tag && (
                                <span className="bg-[#C0C0C0]/10 text-[#C0C0C0] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                                    {release.tag}
                                </span>
                            )}
                        </div>

                        <div className="space-y-3">
                            {release.changes.map((change, i) => {
                                const style = typeColors[change.type];
                                return (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className={`${style.bg} ${style.text} text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mt-0.5 flex-shrink-0`}>
                                            {style.label}
                                        </span>
                                        <p className="text-sm text-zinc-300">{change.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </SubpageLayout>
    );
}
