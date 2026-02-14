import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { TechMarquee } from "@/components/TechMarquee";
import { UseCases } from "@/components/UseCases";
import { AgenticDemo } from "@/components/AgenticDemo";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen with social proof */}
      <Hero />

      {/* Tech Marquee - Scrolling technologies */}
      <TechMarquee />

      {/* Use Cases - Scrolling industry applications */}
      <UseCases />

      {/* Features Section - 6 feature cards */}
      <FeatureCards />

      {/* Agentic Demo - Interactive 4-phase demonstration */}
      <AgenticDemo />

      {/* Pricing Section - 3 pricing tiers */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}
