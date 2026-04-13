import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Privacy Policy — ALEPH",
    description: "ALEPH's privacy policy. Learn how we handle (or rather, don't handle) your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <SubpageLayout
            title="Privacy Policy"
            subtitle="Your privacy is not a feature — it's a fundamental right. Here's how ALEPH protects it."
            icon="shield"
            lastUpdated="March 15, 2026"
        >
            <div className="space-y-10 text-sm text-zinc-400 leading-relaxed">
                {/* Highlight */}
                <div className="p-6 rounded-2xl bg-[#C0C0C0]/5 border border-[#C0C0C0]/20">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-[#C0C0C0] text-lg">verified_user</span>
                        <span className="text-sm font-semibold text-[#C0C0C0]">TL;DR</span>
                    </div>
                    <p className="text-zinc-300">
                        ALEPH processes all files locally on your machine. We don&apos;t collect, transmit, or store any of your files or personal data. Period.
                    </p>
                </div>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">1. Information We Collect</h2>
                    <p className="mb-4">
                        ALEPH is designed with a strict local-first architecture. The application operates entirely on your device, and we collect minimal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-zinc-300">Anonymous Usage Analytics:</strong> Basic, anonymized telemetry such as app version, OS type, and feature usage frequency. This can be fully disabled in settings.</li>
                        <li><strong className="text-zinc-300">Crash Reports:</strong> When the application crashes, an anonymized error report may be sent to help us improve stability. This is opt-in only.</li>
                        <li><strong className="text-zinc-300">Account Information:</strong> If you create an account for Pro/Team features, we store your email address and subscription status.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">2. Information We Do NOT Collect</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>File contents, names, or metadata</li>
                        <li>Directory structures or file paths</li>
                        <li>Automation rule configurations</li>
                        <li>Activity logs or file processing history</li>
                        <li>Screenshots or screen recordings</li>
                        <li>Keystrokes or clipboard data</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">3. Data Storage</h2>
                    <p>
                        All automation rules, preferences, and activity logs are stored in a local SQLite database on your machine. This data is never transmitted to external servers. You have full ownership and control over this data, including the ability to export or delete it at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">4. Third-Party Services</h2>
                    <p>
                        ALEPH does not integrate with any third-party analytics, advertising, or tracking services by default. Optional integrations (e.g., plugin marketplace, cloud sync bridges) are clearly labeled and require explicit opt-in.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">5. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. Significant changes will be communicated through the application and our website. Continued use of ALEPH after changes constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">6. Contact</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us at{" "}
                        <a href="mailto:privacy@aleph.dev" className="text-[#C0C0C0] hover:underline">privacy@aleph.dev</a>.
                    </p>
                </section>
            </div>
        </SubpageLayout>
    );
}
