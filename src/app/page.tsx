import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import CTASection from "@/components/CTASection";
import FeatureMarquee from "@/components/FeatureMarquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mesh-bg text-slate-100">
      <Header />
      <HeroSection />
      <FeatureCards />
      <CTASection />
      <FeatureMarquee />
    </main>
  );
}
