import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Getting Started — ALEPH",
    description: "Get started with ALEPH in minutes. A step-by-step guide to installing and configuring your first automation.",
};

const steps = [
    {
        number: "01",
        title: "Download & Install",
        content: "Download the latest version of ALEPH for your operating system. The installer handles everything — no dependencies, no configuration files, no terminal commands required.",
        code: null,
        note: "Available for Windows 10+, macOS 12+, and Ubuntu 20.04+. All builds are code-signed and verified.",
    },
    {
        number: "02",
        title: "Choose a Directory to Watch",
        content: "On first launch, ALEPH will ask you to select a directory to monitor. This is where the automation engine will watch for file events. You can add more directories later.",
        code: null,
        note: "We recommend starting with your Downloads folder — it's the most common use case for file automation.",
    },
    {
        number: "03",
        title: "Create Your First Rule",
        content: "Use the visual rule builder to create your first automation. A rule consists of three parts: a trigger (when), conditions (if), and actions (then).",
        code: `{
  "trigger": "file_created",
  "conditions": [
    { "field": "extension", "operator": "in", "value": [".jpg", ".png", ".webp"] }
  ],
  "actions": [
    { "type": "move", "destination": "~/Pictures/Auto-Sorted/{date:YYYY-MM}" }
  ]
}`,
        note: "This example rule automatically moves new images to a date-organized folder in your Pictures directory.",
    },
    {
        number: "04",
        title: "Test & Activate",
        content: "Before activating a rule, use the built-in test mode to simulate file events. Drop a test file into your watched directory and verify the rule executes correctly.",
        code: null,
        note: "Test mode creates a temporary sandbox — no files are actually moved or modified until you activate the rule.",
    },
    {
        number: "05",
        title: "Monitor & Refine",
        content: "Once active, monitor your rules from the dashboard. View execution logs, success rates, and processing times. Refine your conditions to handle edge cases.",
        code: null,
        note: "The activity feed shows real-time updates for every file event processed by ALEPH.",
    },
];

export default function GettingStartedPage() {
    return (
        <SubpageLayout
            title="Getting Started"
            subtitle="From zero to automated in 5 minutes. Follow this guide to set up ALEPH and create your first rule."
            icon="play_circle"
        >
            <div className="space-y-12">
                {steps.map((step) => (
                    <div key={step.number} className="flex gap-6">
                        {/* Step number */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C0C0C0]/10 border border-[#C0C0C0]/20 flex items-center justify-center font-mono text-[#C0C0C0] font-bold text-sm">
                            {step.number}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-zinc-100 mb-3 font-[family-name:var(--font-space-grotesk)]">
                                {step.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                {step.content}
                            </p>

                            {step.code && (
                                <div className="mb-4 p-4 rounded-xl bg-[#0d0e0f] border border-zinc-800/50 font-mono text-xs text-zinc-300 overflow-x-auto">
                                    <pre>{step.code}</pre>
                                </div>
                            )}

                            {step.note && (
                                <div className="flex items-start gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/30">
                                    <span className="material-symbols-outlined text-zinc-500 text-base mt-0.5">info</span>
                                    <p className="text-xs text-zinc-500 leading-relaxed">{step.note}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Next Steps */}
            <div className="mt-16 p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
                <h3 className="text-lg font-bold text-zinc-100 mb-4 font-[family-name:var(--font-space-grotesk)]">What&apos;s Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="/docs" className="p-4 rounded-xl border border-zinc-800/50 hover:border-[#C0C0C0]/20 transition-colors group">
                        <span className="material-symbols-outlined text-[#C0C0C0] text-xl mb-2 block">menu_book</span>
                        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Read the full docs</span>
                    </a>
                    <a href="/api-reference" className="p-4 rounded-xl border border-zinc-800/50 hover:border-[#C0C0C0]/20 transition-colors group">
                        <span className="material-symbols-outlined text-[#C0C0C0] text-xl mb-2 block">api</span>
                        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Explore the API</span>
                    </a>
                    <a href="/faq" className="p-4 rounded-xl border border-zinc-800/50 hover:border-[#C0C0C0]/20 transition-colors group">
                        <span className="material-symbols-outlined text-[#C0C0C0] text-xl mb-2 block">help</span>
                        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Check the FAQ</span>
                    </a>
                </div>
            </div>
        </SubpageLayout>
    );
}
