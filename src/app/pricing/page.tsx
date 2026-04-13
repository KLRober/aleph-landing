import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
    title: "Pricing — ALEPH",
    description: "Simple, transparent pricing for ALEPH. Start free, upgrade when you need more power.",
};

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for personal use and getting started with file automation.",
        features: [
            "Up to 5 active rules",
            "Single directory monitoring",
            "Basic file operations",
            "Desktop notifications",
            "Community support",
        ],
        cta: "Download Free",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        description: "For power users who need advanced automation capabilities.",
        features: [
            "Unlimited active rules",
            "Multi-directory monitoring",
            "Advanced conditions & logic",
            "Scheduled automations",
            "Priority support",
            "Plugin system access",
            "Custom scripts integration",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Team",
        price: "$29",
        period: "/month per seat",
        description: "Shared automation rules and centralized management for teams.",
        features: [
            "Everything in Pro",
            "Shared rule library",
            "Team dashboard",
            "Role-based access control",
            "Audit logs",
            "Dedicated support",
            "Custom onboarding",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <SubpageLayout
            title="Pricing"
            subtitle="Start automating for free. Upgrade when you're ready for more power."
            icon="payments"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.highlighted
                            ? "border-[#C0C0C0]/40 bg-[#C0C0C0]/5 shadow-lg shadow-[#C0C0C0]/5"
                            : "border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700/50"
                            }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C0C0C0] text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-bold text-zinc-50">{plan.price}</span>
                            <span className="text-sm text-zinc-500">{plan.period}</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                                    <span className="material-symbols-outlined text-[#C0C0C0] text-base">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-3 rounded-lg text-sm font-bold transition-all ${plan.highlighted
                                ? "bg-[#C0C0C0] text-[#0a0a0a] hover:bg-[#a0a0a0]"
                                : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                                }`}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-zinc-500 text-sm">
                    All plans include local-first processing, zero data collection, and automatic updates.
                </p>
            </div>
        </SubpageLayout>
    );
}
