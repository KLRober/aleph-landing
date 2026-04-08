import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NeuralFlowSection from "@/components/NeuralFlowSection";
import BentoGrid from "@/components/AutomationEngineSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SystemIntegritySection from "@/components/SystemIntegritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121414] text-[#e5e2e1] relative">
      {/* Giant ℵ Watermark */}
      <div className="aleph-watermark select-none" aria-hidden="true">ℵ</div>

      <Header />
      <HeroSection />
      <NeuralFlowSection />
      <BentoGrid />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <SystemIntegritySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
