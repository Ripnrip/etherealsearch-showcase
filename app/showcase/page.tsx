"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

const variants = [
  {
    id: "etherealsearch",
    name: "EtherealSearch",
    title: "Agentic RAG for Engineering",
    description: "AI-powered search for technical documentation, diagrams, and blueprints",
    icon: "🔍",
    url: "https://etherealsearch-showcase.vercel.app",
    image: "https://etherealsearch-showcase.vercel.app/screenshots/01-hero.png",
    color: "from-blue-400 to-purple-400",
    tech: ["Next.js", "Vector DB", "GLM-4.6V", "MCP"]
  },
  {
    id: "v0-explorer",
    name: "v0 Explorer",
    title: "AI Exploration Platform",
    description: "Multi-modal search across text, images, and diagrams for technical documentation",
    icon: "🌌",
    url: "https://v0-ethereal-explorer.vercel.app",
    image: "https://etherealsearch-showcase.vercel.app/screenshots/v0-explorer-hero.png",
    color: "from-emerald-400 to-cyan-400",
    tech: ["Next.js", "v0.dev", "Vision AI", "Vector DB"]
  },
  {
    id: "v0-eye",
    name: "v0 Eye",
    title: "AI Vision Interface",
    description: "Vision analysis and URL enrichment for comprehensive document understanding",
    icon: "👁️",
    url: "https://v0-ethereal-eye.vercel.app",
    image: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-v0-login-2026-02-14.png",
    color: "from-yellow-400 to-red-400",
    tech: ["Computer Vision", "GLM-4V", "URL Enrichment", "Agentic RAG"]
  },
  {
    id: "v0-insight",
    name: "v0 Insight",
    title: "AI Analytics Dashboard",
    description: "Real-time monitoring of document processing pipelines with comprehensive analytics",
    icon: "📊",
    url: "https://v0-ethereal-insight.vercel.app",
    image: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-insight-v0-login-page-2026-02-14.png",
    color: "from-violet-400 to-pink-400",
    tech: ["Analytics", "Dashboard", "RAG Pipeline", "Visualization"]
  }
];

export default function ShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVariant = variants[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="text-center py-16 px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-3xl animate-pulse">
            ✨
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            V0 Apps Showcase
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Four Revolutionary AI-Powered Applications for Engineering Teams
        </p>
      </div>

      {/* Main Showcase */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVariant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* App Header */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentVariant.color} flex items-center justify-center text-4xl shadow-xl`}>
                    {currentVariant.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{currentVariant.name}</h2>
                    <p className="text-xl text-gray-400 mb-2">{currentVariant.title}</p>
                    <p className="text-lg text-gray-500 max-w-2xl">{currentVariant.description}</p>
                  </div>
                </div>
                <motion.a
                  href={currentVariant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              <div className="flex gap-3 mt-6 flex-wrap">
                {currentVariant.tech.map((tech, i) => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="aspect-video bg-black/20 p-8 flex items-center justify-center">
              <img
                src={currentVariant.image}
                alt={currentVariant.name}
                className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <motion.button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + variants.length) % variants.length)}
            className="p-4 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} of {variants.length}
            </span>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>

          <motion.button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % variants.length)}
            className="p-4 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Variant Selector */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {variants.map((variant, index) => (
            <motion.button
              key={variant.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-2xl border transition-all ${
                index === currentIndex
                  ? "bg-white/20 border-white/30 shadow-xl ring-2 ring-blue-400/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-2">{variant.icon}</div>
              <div className={`font-semibold text-sm ${
                index === currentIndex ? "text-white" : "text-gray-400"
              }">
            {variant.name}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
