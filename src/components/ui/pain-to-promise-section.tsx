
"use client";

import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { colors } from "@/lib/design-tokens";

/**
 * Pain-to-Promise Section
 * 60/40 split layout with diagonal divider showcasing problems vs solutions
 */
export function PainToPromiseSection() {
  const painPoints = [
    "Ghost leads that never convert",
    "Sky-high cost-per-lead draining your budget", 
    "Manual follow-up eating your time"
  ];

  const promisePoints = [
    "Automated AI triage delivers only real buyers",
    "Dramatically lower CPL through smart filtering",
    "Calendar-ready calls—no chasing required"
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

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Pain column - 60% */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2 font-roboto">The Problem</h3>
                <div className="w-16 h-1 bg-red-400 rounded"></div>
              </div>
              
              <div className="space-y-4">
                {painPoints.map((pain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300 font-roboto">
                      {pain}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Diagonal divider */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="hidden lg:block w-0.5 h-48 bg-gradient-to-b from-red-400/50 via-white/20 to-[#efcc8a]/50 transform rotate-12"></div>
              <div className="lg:hidden w-48 h-0.5 bg-gradient-to-r from-red-400/50 via-white/20 to-[#efcc8a]/50"></div>
            </div>

            {/* Promise column - 40% */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2 font-roboto">The Solution</h3>
                <div className="w-16 h-1 bg-[#efcc8a] rounded"></div>
              </div>
              
              <div className="space-y-4">
                {promisePoints.map((promise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#efcc8a]/5 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#efcc8a]/20 flex items-center justify-center mt-0.5">
                      <ArrowRight className="w-4 h-4 text-[#efcc8a]" />
                    </div>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300 font-roboto">
                      {promise}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
