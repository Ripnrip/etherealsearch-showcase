"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Brain, Cpu, Sparkles, Send, ChevronRight, Check } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { suggestedPrompts, demoPhases } from "@/lib/demo-data";

const iconMap = {
  Brain: Brain,
  Search: Search,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export function AgenticDemo() {
  const [query, setQuery] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setQuery(searchQuery);
    setIsRunning(true);
    setCurrentPhase(0);
    setShowResult(false);

    // Simulate phase transitions
    demoPhases.forEach((_, index) => {
      setTimeout(() => {
        setCurrentPhase(index + 1);
      }, (index + 1) * 2000);
    });

    // Show result after all phases
    setTimeout(() => {
      setShowResult(true);
      setIsRunning(false);
    }, 8500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See the <span className="gradient-text">Magic</span> in Action
          </h2>
          <p className="text-xl text-gray-400">
            Watch how EtherealSearch processes complex engineering queries
          </p>
        </motion.div>

        <GlassCard className="p-8">
          {/* Search Input */}
          <form onSubmit={handleSubmit} className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about your engineering documents..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-accent-sky/50 focus:ring-2 focus:ring-accent-sky/20 transition-all"
              disabled={isRunning}
            />
            <button
              type="submit"
              disabled={isRunning || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-accent-sky to-accent-violet rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>

          {/* Suggested Prompts */}
          {!isRunning && !showResult && (
            <div className="space-y-2">
              <p className="text-sm text-gray-500 mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearch(prompt)}
                    className="text-sm px-4 py-2 glass rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-accent-sky" />
                    {prompt.length > 50 ? prompt.slice(0, 50) + "..." : prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Phase Progress */}
          <AnimatePresence>
            {(isRunning || showResult) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8"
              >
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {demoPhases.map((phase, index) => {
                    const IconComponent = iconMap[phase.icon as keyof typeof iconMap];
                    const isActive = currentPhase > index;
                    const isCurrent = currentPhase === index + 1;
                    const isComplete = showResult || currentPhase > index + 1;

                    return (
                      <motion.div
                        key={phase.id}
                        className={`relative p-4 rounded-xl border transition-all duration-500 ${
                          isComplete
                            ? "bg-accent-sky/10 border-accent-sky/30"
                            : isCurrent
                            ? "bg-accent-violet/10 border-accent-violet/30"
                            : "bg-white/5 border-white/10"
                        }`}
                        animate={isCurrent ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 0.5, repeat: isCurrent ? Infinity : 0 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg ${
                              isComplete
                                ? "bg-accent-sky/20"
                                : isCurrent
                                ? "bg-accent-violet/20"
                                : "bg-white/10"
                            }`}
                          >
                            {isComplete ? (
                              <Check className="w-5 h-5 text-accent-sky" />
                            ) : (
                              <IconComponent
                                className={`w-5 h-5 ${
                                  isCurrent ? "text-accent-violet" : "text-gray-500"
                                }`}
                              />
                            )}
                          </div>
                          <span
                            className={`font-medium ${
                              isComplete
                                ? "text-accent-sky"
                                : isCurrent
                                ? "text-accent-violet"
                                : "text-gray-500"
                            }`}
                          >
                            {phase.title}
                          </span>
                        </div>
                        <AnimatePresence>
                          {isCurrent && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-xs text-gray-400"
                            >
                              {phase.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Progress bar */}
                        {isCurrent && (
                          <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-accent-violet rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2 }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Result */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-accent-sky/10 to-accent-violet/10 border border-accent-sky/20 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-accent-sky" />
                        <span className="font-semibold text-accent-sky">Analysis Complete</span>
                      </div>

                      <div className="space-y-4 text-gray-300">
                        <p>
                          Based on your query, I found <strong className="text-white">23 relevant diagrams</strong> in your knowledge base related to hydraulic systems with pressure ratings above 2000 PSI.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-4">
                            <p className="text-sm text-gray-500 mb-1">Primary Match</p>
                            <p className="text-white font-medium">Hydraulic System Blueprint REV-2024-03</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <p className="text-sm text-gray-500 mb-1">Confidence Score</p>
                            <p className="text-accent-sky font-medium">97.3%</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400">
                          The main hydraulic pump assembly (DWG-HYD-001) shows a maximum operating pressure of 2,500 PSI with a safety factor of 1.5x. Recommended maintenance interval: 2,000 hours.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setShowResult(false);
                          setQuery("");
                          setCurrentPhase(0);
                        }}
                        className="mt-6 px-6 py-2 glass rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        Try Another Query
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
}
