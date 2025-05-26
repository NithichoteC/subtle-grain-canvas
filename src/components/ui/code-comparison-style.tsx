
"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { useState } from "react";

/**
 * Business Dashboard Comparison Component
 * Shows current process problems vs AI-optimized solutions in business terms
 */
export function CodeComparisonStyle() {
  const [isRightHovered, setIsRightHovered] = useState(false);

  const currentProcessMetrics = `Lead Generation Performance Dashboard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CONVERSION METRICS
├─ Lead-to-Meeting Rate: 8.3%          ⚠️ CRITICAL
├─ Meeting Show-up Rate: 45%           ⚠️ POOR
├─ Meeting-to-Close Rate: 12%          ⚠️ LOW
└─ Overall Conversion: 0.4%            🔴 FAILING

💰 COST ANALYSIS
├─ Average Cost per Lead: $287         ⚠️ HIGH
├─ Cost per Qualified Meeting: $3,458  🔴 EXCESSIVE
├─ Cost per Closed Deal: $28,833       🔴 UNSUSTAINABLE
└─ Monthly Ad Spend: $45,000           ⚠️ BLEEDING

⏱️ TIME ALLOCATION
├─ Hours spent on unqualified leads: 67/week
├─ Manual follow-up time: 23 hrs/week
├─ Ghost lead chase time: 15 hrs/week
└─ Administrative overhead: 12 hrs/week

📞 LEAD QUALITY BREAKDOWN
├─ Tire Kickers: 47%                  🔴 MAJORITY
├─ Budget Unqualified: 31%            ⚠️ HIGH
├─ Not Decision Makers: 16%           ⚠️ WASTED EFFORT
└─ Actually Ready to Buy: 6%          🔴 TINY FRACTION

🎯 SALES TEAM IMPACT
├─ Frustrated sales reps: 4 out of 5
├─ Time wasted on dead ends: 78%
├─ Quota achievement: 34%
└─ Team morale: Critically low`;

  const optimizedProcessMetrics = `AI-Optimized Lead System Dashboard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CONVERSION METRICS
├─ Lead-to-Meeting Rate: 73%           ✅ EXCELLENT
├─ Meeting Show-up Rate: 94%           ✅ OUTSTANDING
├─ Meeting-to-Close Rate: 58%          ✅ HIGH-PERFORMANCE
└─ Overall Conversion: 39.8%           🌟 EXCEPTIONAL

💰 COST ANALYSIS
├─ Average Cost per Lead: $52          ✅ 82% REDUCTION
├─ Cost per Qualified Meeting: $127    ✅ 96% REDUCTION
├─ Cost per Closed Deal: $1,347        ✅ 95% REDUCTION
└─ Monthly Ad Spend: $8,900            ✅ 80% SAVINGS

⏱️ TIME ALLOCATION
├─ Hours spent on qualified leads only: 8/week
├─ Automated follow-up system: 0 hrs manual
├─ Zero ghost lead chase time: 0 hrs/week
└─ Administrative overhead: 2 hrs/week

📞 LEAD QUALITY BREAKDOWN
├─ Pre-qualified buyers: 89%           ✅ MAJORITY
├─ Budget verified: 94%                ✅ CONFIRMED
├─ Decision makers: 87%                ✅ AUTHORITY
└─ Ready to move forward: 76%          🌟 QUALIFIED PIPELINE

🎯 SALES TEAM IMPACT
├─ Energized sales team: 5 out of 5
├─ Time focused on closers: 94%
├─ Quota achievement: 147%
└─ Team morale: All-time high`;

  return (
    <div className="w-full bg-[#171717] relative">
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
              From <span className="text-amber-400">Money Drain</span> to <span className="bronze-gradient-fix">Profit Engine</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              See the dramatic transformation in your business metrics when you stop chasing ghost leads and start booking qualified buyers.
            </p>
          </motion.div>

          {/* Dashboard Comparison Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl border border-white/20 bg-[#0d1117] overflow-hidden"
          >
            <NoiseTexture opacity={0.03} />
            
            {/* Header Tabs */}
            <div className="flex border-b border-white/10">
              <div className="flex-1 border-r border-white/10">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22]">
                  <TrendingDown className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-white/90 font-mono">current-process.metrics</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-amber-400"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22]">
                  <TrendingUp className="w-4 h-4 text-[#efcc8a]" />
                  <span className="text-sm font-medium text-white/90 font-mono">ai-optimized.results</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-[#efcc8a]"></div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex min-h-[600px]">
              {/* Current Process Side (Left) */}
              <div className="flex-1 border-r border-white/10 relative bg-[#0d1117]">
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <pre className="text-white/80 whitespace-pre-wrap">
                    {currentProcessMetrics.split('\n').map((line, index) => {
                      const isWarning = line.includes('⚠️') || line.includes('🔴');
                      const isHeader = line.includes('━') || line.includes('📊') || line.includes('💰') || line.includes('⏱️') || line.includes('📞') || line.includes('🎯');
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          viewport={{ once: true }}
                          className={`
                            ${isWarning ? 'bg-amber-400/10 border-l-2 border-amber-400 pl-2 -ml-2' : ''}
                            ${isHeader ? 'text-amber-300 font-semibold' : ''}
                            hover:bg-white/5 transition-colors duration-200
                          `}
                        >
                          {line}
                        </motion.div>
                      );
                    })}
                  </pre>
                </div>
              </div>

              {/* Optimized Process Side (Right) */}
              <div 
                className="flex-1 relative bg-[#0d1117] overflow-hidden"
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
              >
                {/* Blur overlay */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 z-10 ${
                    isRightHovered ? 'backdrop-blur-0 opacity-0' : 'backdrop-blur-md opacity-100'
                  }`}
                  style={{ 
                    background: isRightHovered ? 'transparent' : 'rgba(13, 17, 23, 0.3)' 
                  }}
                />
                
                {/* Hover hint */}
                {!isRightHovered && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[#efcc8a] font-semibold text-lg mb-2"
                      >
                        Hover to see your future metrics
                      </motion.div>
                      <div className="text-white/40 text-sm">Discover what AI optimization delivers</div>
                    </div>
                  </div>
                )}

                <div className="p-6 font-mono text-sm leading-relaxed relative z-0">
                  <pre className="text-white/80 whitespace-pre-wrap">
                    {optimizedProcessMetrics.split('\n').map((line, index) => {
                      const isSuccess = line.includes('✅') || line.includes('🌟');
                      const isHeader = line.includes('━') || line.includes('📊') || line.includes('💰') || line.includes('⏱️') || line.includes('📞') || line.includes('🎯');
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          viewport={{ once: true }}
                          className={`
                            ${isSuccess ? 'bg-[#efcc8a]/10 border-l-2 border-[#efcc8a] pl-2 -ml-2' : ''}
                            ${isHeader ? 'text-[#efcc8a] font-semibold' : ''}
                            hover:bg-white/5 transition-colors duration-200
                          `}
                        >
                          {line}
                        </motion.div>
                      );
                    })}
                  </pre>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-amber-400/30 via-white/10 to-[#efcc8a]/30"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
