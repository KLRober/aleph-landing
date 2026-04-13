import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "FAQ — ALEPH",
    description: "Frequently asked questions about ALEPH. Find answers about installation, features, privacy, and more.",
};

const faqs = [
    {
        category: "General",
        items: [
            {
                q: "What is ALEPH?",
                a: "ALEPH is a high-performance, local-first file automation engine. It monitors your directories and automatically executes actions based on customizable rules — like sorting files, renaming them, creating backups, or sending notifications.",
            },
            {
                q: "Is ALEPH free to use?",
                a: "ALEPH offers a free tier with up to 5 active rules and single-directory monitoring. For power users and teams, we offer Pro and Team plans with unlimited rules, advanced features, and priority support.",
            },
            {
                q: "Which operating systems are supported?",
                a: "ALEPH currently supports Windows 10+, macOS 12+, and Ubuntu 20.04+ (and most Debian-based distributions). We're actively working on broader Linux distribution support.",
            },
        ],
    },
    {
        category: "Privacy & Security",
        items: [
            {
                q: "Does ALEPH send my files to the cloud?",
                a: "Absolutely not. ALEPH is built with a strict local-first architecture. All file processing happens entirely on your machine. No files, metadata, or file contents are ever uploaded to external servers.",
            },
            {
                q: "Is my data safe?",
                a: "Yes. ALEPH never accesses file contents unless explicitly configured to do so (e.g., content-based filtering). All rule configurations are stored locally in an encrypted SQLite database.",
            },
            {
                q: "Does ALEPH require an internet connection?",
                a: "No. ALEPH works completely offline. An internet connection is only needed for downloading updates, syncing with the plugin marketplace, or if you explicitly configure cloud integration bridges.",
            },
        ],
    },
    {
        category: "Technical",
        items: [
            {
                q: "How does the file watcher work?",
                a: "ALEPH uses native OS file system event APIs (FSEvents on macOS, ReadDirectoryChangesW on Windows, inotify on Linux) for near-zero CPU overhead monitoring. File events are processed through an asynchronous pipeline with sub-50ms latency.",
            },
            {
                q: "Can I write custom automation scripts?",
                a: "Yes — Pro users can integrate custom JavaScript or Python scripts as automation actions. Scripts run in a sandboxed environment with controlled file system access for security.",
            },
            {
                q: "What happens if a rule conflicts with another?",
                a: "ALEPH includes a conflict resolution engine that detects overlapping rules. You can set priority levels and conflict resolution strategies (first-match, last-match, or merge) for each rule.",
            },
        ],
    },
    {
        category: "Billing & Support",
        items: [
            {
                q: "Can I cancel my subscription anytime?",
                a: "Yes. You can cancel your Pro or Team subscription at any time. You'll continue to have access to premium features until the end of your billing period, then your account reverts to the free tier.",
            },
            {
                q: "How do I get support?",
                a: "Free users can access community support through GitHub Discussions and our Discord server. Pro and Team users receive priority email support with guaranteed response times.",
            },
        ],
    },
];

export default function FaqPage() {
    return (
        <SubpageLayout
            title="Frequently Asked Questions"
            subtitle="Quick answers to the most common questions about ALEPH."
            icon="quiz"
        >
            <div className="space-y-12">
                {faqs.map((section) => (
                    <div key={section.category}>
                        <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-6 pb-3 border-b border-zinc-800/50">
                            {section.category}
                        </h2>
                        <div className="space-y-6">
                            {section.items.map((faq) => (
                                <div key={faq.q} className="p-5 rounded-xl border border-zinc-800/30 bg-zinc-900/20">
                                    <h3 className="text-sm font-semibold text-zinc-100 mb-2 flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[#C0C0C0] text-base mt-0.5 flex-shrink-0">help</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed pl-7">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-zinc-400 text-sm mb-4">Still have questions?</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-zinc-800 text-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
                        Contact Support
                    </button>
                    <button className="bg-[#C0C0C0]/10 text-[#C0C0C0] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#C0C0C0]/15 transition-colors border border-[#C0C0C0]/20">
                        Join Discord
                    </button>
                </div>
            </div>
        </SubpageLayout>
    );
}
