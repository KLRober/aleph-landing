import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "API Reference — ALEPH",
    description: "Complete API reference for ALEPH's plugin system and automation engine.",
};

const endpoints = [
    {
        method: "GET",
        path: "/api/rules",
        description: "Retrieve all automation rules configured in the system.",
        params: [
            { name: "status", type: "string", desc: "Filter by rule status: active, paused, error" },
            { name: "limit", type: "number", desc: "Maximum number of rules to return (default: 50)" },
        ],
    },
    {
        method: "POST",
        path: "/api/rules",
        description: "Create a new automation rule with specified triggers, conditions, and actions.",
        params: [
            { name: "name", type: "string", desc: "Human-readable name for the rule (required)" },
            { name: "trigger", type: "object", desc: "Trigger configuration object (required)" },
            { name: "conditions", type: "array", desc: "Array of condition objects (optional)" },
            { name: "actions", type: "array", desc: "Array of action objects (required)" },
        ],
    },
    {
        method: "PUT",
        path: "/api/rules/:id",
        description: "Update an existing automation rule by ID.",
        params: [
            { name: "id", type: "string", desc: "Unique rule identifier (path parameter)" },
        ],
    },
    {
        method: "DELETE",
        path: "/api/rules/:id",
        description: "Delete an automation rule by ID. This action is irreversible.",
        params: [
            { name: "id", type: "string", desc: "Unique rule identifier (path parameter)" },
        ],
    },
    {
        method: "GET",
        path: "/api/stats",
        description: "Retrieve automation statistics and metrics.",
        params: [
            { name: "period", type: "string", desc: "Time period: today, week, month, all" },
        ],
    },
    {
        method: "POST",
        path: "/api/plugins/install",
        description: "Install a plugin from the marketplace or a local path.",
        params: [
            { name: "source", type: "string", desc: "Plugin marketplace ID or local file path" },
        ],
    },
];

const methodColors: Record<string, string> = {
    GET: "bg-zinc-400/10 text-zinc-300",
    POST: "bg-blue-500/10 text-blue-400",
    PUT: "bg-amber-500/10 text-amber-400",
    DELETE: "bg-red-500/10 text-red-400",
};

export default function ApiReferencePage() {
    return (
        <SubpageLayout
            title="API Reference"
            subtitle="Complete reference for ALEPH's local REST API. All endpoints run on localhost with token authentication."
            icon="api"
            lastUpdated="April 2026"
        >
            {/* Base URL */}
            <div className="mb-10 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 font-mono text-sm">
                <span className="text-zinc-500">Base URL:</span>{" "}
                <span className="text-[#C0C0C0]">http://localhost:51205</span>
            </div>

            {/* Auth info */}
            <div className="mb-10 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-amber-400 text-lg">warning</span>
                    <span className="text-sm font-semibold text-amber-300">Authentication Required</span>
                </div>
                <p className="text-xs text-zinc-400">
                    All API requests require a bearer token. The token is generated at startup and stored in <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-[#C0C0C0]">~/.aleph/auth.token</code>
                </p>
            </div>

            {/* Endpoints */}
            <div className="space-y-6">
                {endpoints.map((endpoint, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className={`${methodColors[endpoint.method]} text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded`}>
                                {endpoint.method}
                            </span>
                            <code className="text-sm text-zinc-200 font-mono">{endpoint.path}</code>
                        </div>
                        <p className="text-sm text-zinc-400 mb-4">{endpoint.description}</p>
                        {endpoint.params.length > 0 && (
                            <div className="border-t border-zinc-800/50 pt-4">
                                <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-mono">Parameters</h4>
                                <div className="space-y-2">
                                    {endpoint.params.map((param) => (
                                        <div key={param.name} className="flex items-start gap-3 text-xs">
                                            <code className="text-[#C0C0C0] font-mono bg-[#C0C0C0]/5 px-1.5 py-0.5 rounded flex-shrink-0">{param.name}</code>
                                            <span className="text-zinc-600 font-mono flex-shrink-0">{param.type}</span>
                                            <span className="text-zinc-400">{param.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SubpageLayout>
    );
}
