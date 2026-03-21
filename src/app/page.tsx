import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NeuralFlowSection from "@/components/NeuralFlowSection";
import BentoGrid from "@/components/AutomationEngineSection";
import SystemIntegritySection from "@/components/SystemIntegritySection";
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
      <SystemIntegritySection />
      <Footer />
    </main>
  );
}
