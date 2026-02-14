import { Hero } from "@/components/Hero";
import { AgenticDemo } from "@/components/AgenticDemo";
import { FeatureCards } from "@/components/FeatureCards";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AgenticDemo />
      <FeatureCards />
      <UseCases />
      <Pricing />
      <Footer />
    </main>
  );
}
