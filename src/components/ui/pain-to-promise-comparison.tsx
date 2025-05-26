
"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";

/**
 * Pain-to-Promise Comparison Component
 * Inspired by Magic UI's CodeComparison with custom styling for pain vs promise
 */
export function PainToPromiseComparison() {
  const painPoints = [
    { text: "Ghost leads that never convert", line: 1 },
    { text: "Sky-high cost-per-lead draining your budget", line: 2 },
    { text: "Manual follow-up eating your time", line: 3 }
  ];

  const promisePoints = [
    { text: "Automated AI triage delivers only real buyers", line: 1 },
    { text: "Dramatically lower CPL through smart filtering", line: 2 },
    { text: "Calendar-ready calls—no chasing required", line: 3 }
  ];

  return (
    <div className="w-full bg-[#171717] relative">
      {/* Section container matching the main layout */}
      <div className="w-full max-w-[1280px] mx-auto relative">
        <div className="px-4 md:px-6 py-16 lg:py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
              From <span className="text-red-400">Pain</span> to <span className="bronze-gradient-fix">Promise</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              Stop bleeding money on leads that go nowhere. Start filling your calendar with qualified buyers.
            </p>
          </motion.div>

          {/* Comparison Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl border border-white/10 bg-[#1a1a1a]/60 backdrop-blur-sm overflow-hidden"
          >
            {/* Noise texture */}
            <NoiseTexture opacity={0.05} />
            
            {/* Header */}
            <div className="flex border-b border-white/10">
              <div className="flex-1 px-6 py-4 border-r border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm font-medium text-white/80 font-roboto">current-state.problems</span>
                </div>
              </div>
              <div className="flex-1 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#efcc8a]"></div>
                  <span className="text-sm font-medium text-white/80 font-roboto">optimized-solution.benefits</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex min-h-[300px]">
              {/* Pain Side */}
              <div className="flex-1 border-r border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 via-transparent to-red-400/10"></div>
                <div className="relative z-10 p-6 space-y-4">
                  {painPoints.map((pain, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-red-400/5 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-red-400/40 font-mono text-sm w-6 flex-shrink-0 mt-0.5">
                        {pain.line}
                      </span>
                      <div className="flex items-start gap-3 flex-1">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300 font-roboto leading-relaxed">
                          {pain.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Promise Side */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#efcc8a]/5 via-transparent to-[#cd7f32]/10"></div>
                <div className="relative z-10 p-6 space-y-4">
                  {promisePoints.map((promise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-[#efcc8a]/5 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-[#efcc8a]/40 font-mono text-sm w-6 flex-shrink-0 mt-0.5">
                        {promise.line}
                      </span>
                      <div className="flex items-start gap-3 flex-1">
                        <Check className="w-5 h-5 text-[#efcc8a] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300 font-roboto leading-relaxed">
                          {promise.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-red-400/50 via-white/20 to-[#efcc8a]/50"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
