import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsMarquee from "@/components/StatsMarquee";
import NeuralEngineSection from "@/components/NeuralEngineSection";
import BentoGrid from "@/components/AutomationEngineSection";
import PipelineBuilderSection from "@/components/PipelineBuilderSection";
import SystemIntegritySection from "@/components/SystemIntegritySection";
import PrivacyBanner from "@/components/PrivacyBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mesh-bg text-zinc-100">
      <Header />
      <HeroSection />
      <StatsMarquee />
      <NeuralEngineSection />
      <BentoGrid />
      <PipelineBuilderSection />
      <SystemIntegritySection />
      <PrivacyBanner />
      <Footer />
    </main>
  );
}
