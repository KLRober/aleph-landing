import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Terms of Service — ALEPH",
    description: "Terms of Service for using ALEPH file automation engine.",
};

export default function TermsPage() {
    return (
        <SubpageLayout
            title="Terms of Service"
            subtitle="The legal agreement between you and ALEPH. Please read these terms carefully before using our software."
            icon="gavel"
            lastUpdated="March 15, 2026"
        >
            <div className="space-y-10 text-sm text-zinc-400 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By downloading, installing, or using ALEPH (&quot;the Software&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Software. These Terms apply to all users of the Software, including free and paid tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">2. Description of Service</h2>
                    <p>
                        ALEPH is a local-first file automation engine that monitors directories and executes user-defined rules. The Software processes files exclusively on the user&apos;s local machine. ALEPH provides both free and premium subscription tiers with varying feature sets.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">3. User Responsibilities</h2>
                    <p className="mb-4">As a user of ALEPH, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Use the Software only for lawful purposes and in accordance with these Terms</li>
                        <li>Take responsibility for the automation rules you create and their outcomes</li>
                        <li>Maintain backups of important files before configuring destructive automation rules</li>
                        <li>Not reverse-engineer, decompile, or attempt to extract the source code of the Software</li>
                        <li>Not use the Software to process files you do not have legal rights to access</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">4. Subscription & Payments</h2>
                    <p>
                        Premium features require a paid subscription. Subscriptions are billed monthly or annually depending on the selected plan. You may cancel at any time; access continues until the end of the current billing period. Refunds are handled on a case-by-case basis within 30 days of purchase.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">5. Intellectual Property</h2>
                    <p>
                        The Software, including its code, design, branding, and documentation, is the intellectual property of the ALEPH team. Your subscription grants you a non-exclusive, non-transferable license to use the Software. Automation rules you create remain your intellectual property.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">6. Limitation of Liability</h2>
                    <p>
                        THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL THE ALEPH TEAM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SOFTWARE.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">7. Termination</h2>
                    <p>
                        We reserve the right to terminate or suspend access to the Software at any time, with or without cause, with or without notice. Upon termination, your right to use the Software will immediately cease. All provisions of these Terms which should survive termination shall survive.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">8. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. Changes will be posted on this page and, for significant changes, communicated through the application. Your continued use of the Software after changes constitutes acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">9. Contact</h2>
                    <p>
                        For questions about these Terms, contact us at{" "}
                        <a href="mailto:legal@aleph.dev" className="text-[#C0C0C0] hover:underline">legal@aleph.dev</a>.
                    </p>
                </section>
            </div>
        </SubpageLayout>
    );
}
