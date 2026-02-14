"use client";

import { motion } from "framer-motion";
import { Scan, Camera, Languages, Brain, Database, Users } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { features } from "@/lib/demo-data";

const iconMap = {
  Scan: Scan,
  Camera: Camera,
  Languages: Languages,
  Brain: Brain,
  Database: Database,
  Users: Users,
};

export function FeatureCards() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform how your engineering team works with technical documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full group cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-sky/20 to-accent-violet/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-accent-sky" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-sky transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
