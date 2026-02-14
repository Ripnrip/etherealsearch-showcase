import { Hero } from "@/components/Hero";
import { SearchInterface } from "@/components/SearchInterface";
import { FeatureCards } from "@/components/FeatureCards";
import { TechMarquee } from "@/components/TechMarquee";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen with social proof */}
      <Hero />

      {/* Tech Marquee - Scrolling technologies */}
      <TechMarquee />

      {/* Search Interface - Interactive demo */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try it <span className="gradient-text">now</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Experience the power of agentic search with your engineering queries
            </p>
          </div>
          <SearchInterface />
        </div>
      </section>

      {/* Features Section - 6 cards */}
      <FeatureCards />

      {/* Footer */}
      <Footer />
    </main>
  );
}
