import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "License — ALEPH",
    description: "ALEPH software license information and open-source attribution.",
};

export default function LicensePage() {
    return (
        <SubpageLayout
            title="License"
            subtitle="ALEPH's software license and open-source attribution for third-party dependencies."
            icon="description"
            lastUpdated="March 15, 2026"
        >
            <div className="space-y-10 text-sm text-zinc-400 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Software License</h2>
                    <div className="p-6 rounded-xl bg-[#0d0e0f] border border-zinc-800/50 font-mono text-xs text-zinc-300 leading-relaxed">
                        <pre className="whitespace-pre-wrap">{`MIT License

Copyright (c) 2026 ALEPH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</pre>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Open Source Attribution</h2>
                    <p className="mb-6">
                        ALEPH is built on the shoulders of incredible open-source projects. We&apos;re grateful to the communities behind these tools:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: "Electron", license: "MIT", description: "Cross-platform desktop application framework" },
                            { name: "React", license: "MIT", description: "User interface component library" },
                            { name: "FastAPI", license: "MIT", description: "High-performance Python web framework" },
                            { name: "SQLite", license: "Public Domain", description: "Embedded relational database engine" },
                            { name: "Watchdog", license: "Apache 2.0", description: "Python file system event monitoring library" },
                            { name: "Framer Motion", license: "MIT", description: "Production-ready animation library for React" },
                            { name: "Tailwind CSS", license: "MIT", description: "Utility-first CSS framework" },
                            { name: "Next.js", license: "MIT", description: "React framework for production applications" },
                        ].map((dep) => (
                            <div
                                key={dep.name}
                                className="p-4 rounded-xl border border-zinc-800/30 bg-zinc-900/20 flex items-start justify-between"
                            >
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-200">{dep.name}</h3>
                                    <p className="text-xs text-zinc-500 mt-1">{dep.description}</p>
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 bg-zinc-800/50 px-2 py-0.5 rounded flex-shrink-0 ml-3">
                                    {dep.license}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-4">Commercial Use</h2>
                    <p>
                        The MIT license allows commercial use, modification, distribution, and private use. The only requirement is that the copyright notice and license text be included in all copies or substantial portions of the Software. For questions about licensing, contact{" "}
                        <a href="mailto:legal@aleph.dev" className="text-[#C0C0C0] hover:underline">legal@aleph.dev</a>.
                    </p>
                </section>
            </div>
        </SubpageLayout>
    );
}
