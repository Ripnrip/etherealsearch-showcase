"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Building2, Users, Zap } from "lucide-react";
import { VectorBackground } from "./VectorBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VectorBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Social Proof Badge */}
          <motion.div
            className="social-proof-badge mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Building2 className="w-4 h-4" />
            <span>Trusted by 500+ Engineering Teams Worldwide</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">EtherealSearch</span>
            <br />
            <span className="text-white">Agentic RAG for Engineering</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            World-class vision analysis meets intelligent search. Analyze diagrams,
            blueprints, and technical documentation with AI that truly{" "}
            <span className="text-[var(--ethereal-cyan)]">understands</span> engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-sky to-accent-violet rounded-xl font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-sky"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 glass rounded-xl font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { value: "99.7%", label: "Accuracy Rate", icon: Zap },
              { value: "2.4M+", label: "Diagrams Processed", icon: Building2 },
              { value: "<500ms", label: "Response Time", icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4 glass rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--ethereal-cyan)]" />
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary to-transparent" />
    </section>
  );
}
