"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

interface AppVariant {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  screenshot: string;
  video?: string;
  color: string;
  tech: string[];
}

const variants: AppVariant[] = [
  {
    id: "etherealsearch",
    name: "EtherealSearch",
    title: "Agentic RAG for Engineering",
    description: "AI-powered search for technical documentation, diagrams, and blueprints",
    icon: "🔍",
    url: "https://etherealsearch-showcase.vercel.app",
    screenshot: "https://etherealsearch-showcase.vercel.app/screenshots/01-hero.png",
    video: "https://etherealsearch-showcase.vercel.app/screenshots/etherealsearch-demo.webm",
    color: "from-blue-400 to-purple-400",
    tech: ["Next.js", "Vector DB", "AI", "MCP"]
  },
  {
    id: "v0-explorer",
    name: "v0 Explorer",
    title: "AI Exploration Platform",
    description: "Building v0 interface for Ethereal Dimension with AI-powered exploration",
    icon: "🌌",
    url: "https://v0-ethereal-explorer.vercel.app",
    screenshot: "https://etherealsearch-showcase.vercel.app/screenshots/v0-explorer-hero.png",
    video: "https://etherealsearch-showcase.vercel.app/screenshots/v0-explorer-showcase.mp4",
    color: "from-emerald-400 to-cyan-400",
    tech: ["Next.js", "v0.dev", "AI", "Explorer"]
  },
  {
    id: "v0-eye",
    name: "v0 Eye",
    title: "AI Vision Interface",
    description: "Advanced computer vision and image analysis with AI capabilities",
    icon: "👁️",
    url: "https://v0-ethereal-eye.vercel.app",
    screenshot: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-v0-login-2026-02-14.png",
    video: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-v0-login-page-video-2026-02-14.webm",
    color: "from-yellow-400 to-red-400",
    tech: ["Computer Vision", "AI", "v0.dev"]
  },
  {
    id: "v0-insight",
    name: "v0 Insight",
    title: "AI Analytics Dashboard",
    description: "AI-powered insights dashboard for advanced analytics and monitoring",
    icon: "📊",
    url: "https://v0-ethereal-insight.vercel.app",
    screenshot: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-insight-v0-login-page-2026-02-14.png",
    video: "https://etherealsearch-showcase.vercel.app/screenshots/ethereal-insight-v0-login-recording.webm",
    color: "from-violet-400 to-pink-400",
    tech: ["Analytics", "Dashboard", "v0.dev"]
  }
];

export default function ShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentVariant = variants[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 150);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % variants.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + variants.length) % variants.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-8 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-3xl shadow-2xl animate-pulse">
            ✨
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            V0 Apps Showcase
          </h1>
        </div>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          Four Revolutionary AI-Powered Applications for Engineering Teams
        </p>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        <div className="w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVariant.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* App Card */}
              <div className="bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Progress bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{ width: isPlaying ? `${progress}%` : "0%" }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />

                {/* Header */}
                <div className="relative p-8 border-b border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentVariant.color} flex items-center justify-center text-4xl shadow-xl`}>
                        {currentVariant.icon}
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-white">{currentVariant.name}</h2>
                        <p className="text-xl text-gray-400 mt-2">{currentVariant.title}</p>
                        <p className="text-lg text-gray-500 mt-1 max-w-2xl">{currentVariant.description}</p>
                      </div>
                    </div>
                    <motion.a
                      href={currentVariant.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex gap-3 mt-6">
                    {currentVariant.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Media */}
                <div className="aspect-video bg-black/30 relative overflow-hidden">
                  {currentVariant.video ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={currentVariant.video}
                    />
                  ) : (
                    <img
                      src={currentVariant.screenshot}
                      alt={currentVariant.name}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Variant indicator */}
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-blue-400" />
                      <span className="text-white font-semibold">
                        {currentIndex + 1} of {variants.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 p-8">
        <motion.button
          onClick={handlePrevious}
          className="p-4 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-6 rounded-full text-white font-semibold transition-all ${
            isPlaying
              ? "bg-gradient-to-r from-red-400 to-orange-400"
              : "bg-gradient-to-r from-green-400 to-blue-400"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="p-4 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Variant selector */}
      <div className="px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {variants.map((variant, index) => (
              <motion.button
                key={variant.id}
                onClick={() => handleSelect(index)}
                className={`p-4 rounded-2xl border transition-all ${
                  index === currentIndex
                    ? "bg-white/20 border-white/30 shadow-xl"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                whileHover={{ y: -2 }}
              >
                <div className="text-3xl mb-2">{variant.icon}</div>
                <div className={`font-semibold ${index === currentIndex ? "text-white" : "text-gray-400"}`}>
                  {variant.name}
                </div>
                <div className={`text-xs mt-1 ${index === currentIndex ? "text-gray-300" : "text-gray-500"}`}>
                  {variant.tech.slice(0, 2).join(" • ")}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
