"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Brain,
  Database,
  Sparkles,
  Send,
  FileText,
  MapPin,
  Clock,
  Check,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const exampleQueries = [
  "What is the design wind speed for Austin commercial buildings?",
  "Show me all projects by John Smith, PE 12345",
  "Compare hydraulic systems between Model A and Model B",
  "Find electrical schematics with 480V specifications",
];

interface Source {
  title: string;
  type: "blueprint" | "spec" | "code" | "manual";
  page?: string;
  confidence: number;
}

interface SearchResult {
  answer: string;
  sources: Source[];
  searchTime: number;
  documentsSearched: number;
}

const mockResults: Record<string, SearchResult> = {
  "What is the design wind speed for Austin commercial buildings?": {
    answer: "The design wind speed for Austin, TX commercial buildings is **115 mph** (3-second gust) for Risk Category II structures, per ASCE 7-22. This applies to buildings under 60ft in height. For taller structures or Risk Category III/IV, wind speeds increase to 120-130 mph.",
    sources: [
      { title: "ASCE 7-22 Minimum Design Loads", type: "code", page: "§26.5", confidence: 98 },
      { title: "Austin Building Code 2024", type: "code", page: "§1609", confidence: 97 },
      { title: "Texas Engineering Standards", type: "spec", confidence: 94 },
    ],
    searchTime: 0.28,
    documentsSearched: 2847,
  },
  "Show me all projects by John Smith, PE 12345": {
    answer: "Found **12 projects** authored by John Smith, PE #12345 in your knowledge base:\n\n• Downtown Office Building (2023) - Structural Lead\n• Riverside Retail Center (2022) - Project Engineer\n• Austin Convention Center Expansion (2021) - Senior Engineer\n• 9 additional projects...",
    sources: [
      { title: "Project Database - John Smith", type: "blueprint", confidence: 99 },
      { title: "PE License Registry TX", type: "manual", confidence: 100 },
    ],
    searchTime: 0.31,
    documentsSearched: 156,
  },
  "Compare hydraulic systems between Model A and Model B": {
    answer: "**Comparison of Hydraulic Systems:**\n\n| Spec | Model A | Model B |\n|------|---------|--------|\n| Max Pressure | 2,500 PSI | 3,000 PSI |\n| Flow Rate | 45 GPM | 52 GPM |\n| Reservoir | 15 gal | 20 gal |\n| Noise Level | 72 dB | 68 dB |\n\n**Recommendation:** Model B for high-demand applications; Model A for cost-sensitive projects.",
    sources: [
      { title: "Hydraulic Systems Catalog v4.2", type: "manual", page: "45-48", confidence: 96 },
      { title: "Model A Spec Sheet DWG-HA-001", type: "blueprint", confidence: 98 },
      { title: "Model B Spec Sheet DWG-HB-001", type: "blueprint", confidence: 98 },
    ],
    searchTime: 0.42,
    documentsSearched: 892,
  },
};

const typeIcons: Record<string, string> = {
  blueprint: "📐",
  spec: "📋",
  code: "📕",
  manual: "📘",
};

const typeColors: Record<string, string> = {
  blueprint: "text-cyan-400",
  spec: "text-violet-400",
  code: "text-amber-400",
  manual: "text-emerald-400",
};

export function SearchInterface() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchPhase, setSearchPhase] = useState(0);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [showExamples, setShowExamples] = useState(true);

  const phases = [
    { icon: Brain, label: "Understanding", desc: "Analyzing your query..." },
    { icon: Database, label: "Searching", desc: "Scanning knowledge base..." },
    { icon: Sparkles, label: "Reasoning", desc: "Synthesizing answer..." },
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setQuery(searchQuery);
    setIsSearching(true);
    setResult(null);
    setShowExamples(false);
    setSearchPhase(0);

    // Simulate search phases
    for (let i = 0; i < phases.length; i++) {
      await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));
      setSearchPhase(i + 1);
    }

    // Show result
    await new Promise((r) => setTimeout(r, 400));
    const mockResult = mockResults[searchQuery] || {
      answer: `Found relevant information about "${searchQuery}". This is a demo response - connect your knowledge base for real results.`,
      sources: [
        { title: "Demo Source Document", type: "blueprint" as const, confidence: 95 },
      ],
      searchTime: 0.3 + Math.random() * 0.2,
      documentsSearched: Math.floor(1000 + Math.random() * 2000),
    };

    setResult(mockResult);
    setIsSearching(false);
  };

  const handleReset = () => {
    setQuery("");
    setResult(null);
    setSearchPhase(0);
    setShowExamples(true);
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-3xl mx-auto">
          {/* Search Box - THE HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-50" />

            <div className="relative bg-[#0c1222] border border-white/10 rounded-2xl p-6">
              {/* Search Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(query);
                }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your engineering documents..."
                  disabled={isSearching}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-lg"
                />
                <button
                  type="submit"
                  disabled={isSearching || !query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>

              {/* Example Queries */}
              <AnimatePresence>
                {showExamples && !result && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <p className="text-xs text-gray-500 mb-2">Try an example:</p>
                    <div className="flex flex-wrap gap-2">
                      {exampleQueries.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSearch(q)}
                          className="text-sm px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-cyan-500/30 transition-all flex items-center gap-1.5"
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-400" />
                          {q.length > 45 ? q.slice(0, 45) + "..." : q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Search Phases */}
          <AnimatePresence>
            {isSearching && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 flex items-center justify-center gap-4"
              >
                {phases.map((phase, i) => {
                  const Icon = phase.icon;
                  const isActive = searchPhase === i + 1;
                  const isComplete = searchPhase > i + 1;

                  return (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                        isComplete
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : isActive
                          ? "bg-violet-500/10 border-violet-500/30 text-violet-400"
                          : "bg-white/5 border-white/10 text-gray-600"
                      }`}
                      animate={isActive ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                    >
                      {isComplete ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{phase.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-4"
              >
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">{result.searchTime}s</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    {result.documentsSearched.toLocaleString()} documents
                  </span>
                </div>

                {/* Answer */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">Answer</span>
                  </div>
                  <div className="text-white leading-relaxed whitespace-pre-wrap text-lg">
                    {result.answer.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="text-cyan-300 font-bold text-xl">
                          {part}
                        </strong>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>
                </div>

                {/* Sources */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Sources</h4>
                  <div className="grid gap-2">
                    {result.sources.map((source, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{typeIcons[source.type]}</span>
                          <div>
                            <p className="text-sm text-white group-hover:text-cyan-400 transition-colors font-medium">
                              {source.title}
                            </p>
                            {source.page && (
                              <p className="text-xs text-slate-400">Page {source.page}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${typeColors[source.type]}`}>
                            {source.confidence}%
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    ← New search
                  </button>
                  <button className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
                    Share result
                  </button>
                  <button className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
                    Export
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State - Before Search */}
          {showExamples && !isSearching && !result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500 text-sm">
                Search across blueprints, specs, codes, and documentation
              </p>
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">📐</span> 2.4M blueprints
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">📋</span> 890K specs
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">📕</span> 156K codes
                </span>
              </div>
            </motion.div>
          )}
        </div>
    </div>
  );
}
