"use client";

import { motion } from "framer-motion";

const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Knowledge Graphs",
  "RAG Architecture",
  "Vector Search",
  "Semantic Analysis",
  "Deep Learning",
  "Document Intelligence",
  "Optical Character Recognition",
  "Multi-Modal AI",
];

export function TechMarquee() {
  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex gap-12 min-w-max">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="tech-badge hover:bg-white/10 transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-12 min-w-max">
          {technologies.map((tech, i) => (
            <motion.div
              key={`dup-${i}`}
              className="tech-badge hover:bg-white/10 transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
