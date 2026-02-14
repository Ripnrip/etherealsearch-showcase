"use client";

import { motion } from "framer-motion";
import { useCases } from "@/lib/demo-data";

export function UseCases() {
  // Duplicate for seamless loop
  const duplicatedUseCases = [...useCases, ...useCases];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-400">
            Trusted by engineering teams across industries
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * useCases.length],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedUseCases.map((useCase, index) => (
            <div
              key={index}
              className="flex-shrink-0 glass px-6 py-3 rounded-full"
            >
              <span className="text-gray-300 whitespace-nowrap">{useCase}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
