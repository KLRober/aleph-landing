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
                a: "ALEPH is a desktop application for Windows that acts as an intelligent control center for your file system. It's an automation engine that watches, processes, organizes, and protects your files in real time — without ever sending data to the cloud.",
            },
            {
                q: "Is ALEPH free to use?",
                a: "ALEPH offers a free plan with the automation engine (basic rules), File Optimizer (up to 3 GB), system tray integration, and command palette. For power users, the Pro plan unlocks unlimited rules, Document Studio, Image Studio, Security Center, and OCR.",
            },
            {
                q: "Which operating systems are supported?",
                a: "ALEPH currently supports Windows 10 and Windows 11. macOS and Linux support are on the roadmap for future releases.",
            },
        ],
    },
    {
        category: "Privacy & Security",
        items: [
            {
                q: "Does ALEPH send my files to the cloud?",
                a: "Never. ALEPH is built with a strict local-first philosophy. All file processing happens entirely on your machine. No files, metadata, or content are ever uploaded to external servers.",
            },
            {
                q: "Is my data safe?",
                a: "Yes. ALEPH stores rules and statistics in a local SQLite database. The Security Center offers AES-256 encrypted backups, DoD 5220.22-M secure file shredding, EXIF metadata stripping, and integrity manifests to verify your files haven't been tampered with.",
            },
            {
                q: "Does ALEPH require an internet connection?",
                a: "No. ALEPH works fully offline in Sovereign Mode. An internet connection is only needed for initial authentication (via Supabase) and payment processing (via Stripe). All file processing and automation runs locally.",
            },
        ],
    },
    {
        category: "Technical",
        items: [
            {
                q: "How does the file watcher work?",
                a: "ALEPH uses Python's watchdog library to monitor directories in real time. When a new file is detected, the system waits for it to stabilize (e.g., finish downloading), then evaluates it against your rules. Events are debounced to prevent duplicate processing.",
            },
            {
                q: "What is the Trigger → Condition → Action model?",
                a: "Every automation rule consists of a Trigger (what starts it — a folder watcher or manual activation), Conditions (filters the file must pass — extension, name, size, date, regex), and Actions (operations to execute — move, compress, rename, encrypt, notify). Actions can be chained into pipelines.",
            },
            {
                q: "What file formats are supported?",
                a: "ALEPH recognizes and organizes 60+ file types across categories: images (PNG, JPG, WebP, TIFF...), documents (PDF, DOCX, XLSX...), videos (MP4, MKV, AVI...), archives (ZIP, RAR, 7Z...), code files, and installers.",
            },
        ],
    },
    {
        category: "Billing & Support",
        items: [
            {
                q: "Can I cancel my subscription anytime?",
                a: "Yes. You can cancel your Pro subscription at any time through the Stripe customer portal. You'll keep Pro features until the end of your billing period, then revert to the free plan.",
            },
            {
                q: "How do I get support?",
                a: "Free users can access community support through GitHub. Pro users receive priority support with faster response times.",
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
