import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Security Policy — ALEPH",
    description: "ALEPH's security practices, vulnerability reporting, and security architecture overview.",
};

export default function SecurityPage() {
    return (
        <SubpageLayout
            title="Security Policy"
            subtitle="How ALEPH keeps your file system safe. Our security architecture, practices, and how to report vulnerabilities."
            icon="security"
            lastUpdated="March 15, 2026"
        >
            <div className="space-y-10 text-sm text-zinc-400 leading-relaxed">
                {/* Security highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: "wifi_off", title: "No Network Access", desc: "Core engine operates entirely offline. No outbound connections for file processing." },
                        { icon: "encrypted", title: "Encrypted Storage", desc: "All local data stored in AES-256 encrypted SQLite database." },
                        { icon: "verified_user", title: "Code Signed", desc: "All releases are code-signed and verified for authenticity." },
                    ].map((item) => (
                        <div key={item.title} className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 text-center">
                            <span className="material-symbols-outlined text-[#C0C0C0] text-2xl mb-3 block">{item.icon}</span>
                            <h3 className="text-sm font-semibold text-zinc-200 mb-1">{item.title}</h3>
                            <p className="text-xs text-zinc-500">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Architecture Security</h2>
                    <p className="mb-4">
                        ALEPH is built with a security-first architecture designed to minimize attack surface and protect your file system:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-zinc-300">Sandboxed Execution:</strong> Custom scripts and plugins run in isolated sandboxes with restricted file system access</li>
                        <li><strong className="text-zinc-300">Token Authentication:</strong> Local API endpoints are protected with per-session bearer tokens generated at startup</li>
                        <li><strong className="text-zinc-300">Least Privilege:</strong> ALEPH requests only the minimum OS permissions necessary for directory monitoring</li>
                        <li><strong className="text-zinc-300">No Eval:</strong> No use of dynamic code execution (eval, exec) in the core engine</li>
                        <li><strong className="text-zinc-300">Input Validation:</strong> All user inputs, file paths, and rule configurations are sanitized and validated</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Vulnerability Reporting</h2>
                    <p className="mb-4">
                        We take security seriously and appreciate responsible disclosure. If you discover a security vulnerability in ALEPH:
                    </p>
                    <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                        <ol className="list-decimal list-inside space-y-3">
                            <li><strong className="text-zinc-300">Email us</strong> at <a href="mailto:security@aleph.dev" className="text-[#C0C0C0] hover:underline">security@aleph.dev</a> with a detailed description</li>
                            <li><strong className="text-zinc-300">Include</strong> steps to reproduce, expected impact, and affected versions</li>
                            <li><strong className="text-zinc-300">Wait</strong> for our acknowledgment (within 48 hours) before any public disclosure</li>
                            <li><strong className="text-zinc-300">We commit</strong> to patching confirmed vulnerabilities within 7 days of verification</li>
                        </ol>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Dependency Management</h2>
                    <p>
                        We regularly audit our dependency tree using automated tools and manual review. All dependencies are pinned to specific versions, and we maintain an internal SBOM (Software Bill of Materials) for full supply chain transparency. Critical security updates are applied and released within 24 hours.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Update & Patching Policy</h2>
                    <p>
                        Security patches are distributed through the standard auto-update mechanism. Critical vulnerabilities receive out-of-band patches. All updates are signed and verified before installation. Users are notified of available updates through the system tray icon.
                    </p>
                </section>
            </div>
        </SubpageLayout>
    );
}
