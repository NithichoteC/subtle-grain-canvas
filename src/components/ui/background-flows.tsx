
"use client";

import { motion } from "framer-motion";

export function BackgroundFlows() {
  // Create more prominent horizontal flow paths that match the sketch
  const flowPaths = [
    // Top section flow path - flowing left to right
    {
      id: "top-flow",
      d: "M-100 180 C100 140, 300 200, 600 160 C900 120, 1100 180, 1400 140",
      width: 2.8,
      opacity: 0.25,
      duration: 24
    },
    // Middle section flow path - flowing right to left 
    {
      id: "middle-flow",
      d: "M1400 380 C1100 340, 900 400, 600 360 C300 320, 100 380, -100 340",
      width: 2.8,
      opacity: 0.25,
      duration: 28
    },
    // Bottom section flow path - flowing left to right again
    {
      id: "bottom-flow",
      d: "M-100 580 C100 540, 300 600, 600 560 C900 520, 1100 580, 1400 540",
      width: 2.8,
      opacity: 0.25,
      duration: 26
    },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full text-white/80"
        viewBox="0 0 1300 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {flowPaths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0, opacity: 0.1 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
