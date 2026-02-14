"use client";

import { motion } from "framer-motion";

export function VectorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl" />

      {/* Animated grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
          <polygon
            points="40,5 75,60 5,60"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%]"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-15">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[20%]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-10">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            transform="rotate(45 50 50)"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-[25%]"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-20">
          <polygon
            points="25,5 45,25 25,45 5,25"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="20%"
          y1="30%"
          x2="80%"
          y2="70%"
          stroke="#38bdf8"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="80%"
          y1="20%"
          x2="20%"
          y2="80%"
          stroke="#a78bfa"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
}
