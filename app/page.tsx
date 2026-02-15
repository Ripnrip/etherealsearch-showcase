"use client";

import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { TechMarquee } from "@/components/TechMarquee";
import { UseCases } from "@/components/UseCases";
import { AgenticDemo } from "@/components/AgenticDemo";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen with social proof */}
      <Hero />

      {/* Tech Marquee - Scrolling technologies */}
      <TechMarquee />

      {/* Epic Showcase Promo */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-400/20 backdrop-blur"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience the Epic Showcase
              </h2>
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch all 4 V0 app variants come to life in a cinematic journey through the future of AI development
            </p>
            <motion.a
              href="/v0-apps"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold rounded-2xl shadow-2xl group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
              Launch Epic Showcase
            </motion.a>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
              <span>🎬</span>
              <span>Cinematic Experience</span>
              <span>•</span>
              <span>🎵</span>
              <span>Smooth Animations</span>
              <span>•</span>
              <span>✨</span>
              <span>All 4 Variants</span>
            </div>
          </motion.div>
        </div>
      </section>

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
