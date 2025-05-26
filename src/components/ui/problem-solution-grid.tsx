
"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, DollarSign, Clock, Users, Target } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";

/**
 * Problem vs Solution Grid Component
 * Grid-based layout showing pain points and AI solutions
 */
export function ProblemSolutionGrid() {
  const problemCards = [
    {
      icon: TrendingDown,
      title: "Ghost Leads",
      description: "47% of leads never respond or show up",
      metric: "47%",
      metricLabel: "No-shows",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "High Cost Per Lead",
      description: "Paying $287 per lead with poor quality",
      metric: "$287",
      metricLabel: "Cost/Lead",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Time Wasted",
      description: "67 hours/week chasing unqualified leads",
      metric: "67hrs",
      metricLabel: "Weekly waste",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Low Conversion",
      description: "Only 0.4% overall conversion rate",
      metric: "0.4%",
      metricLabel: "Conversion",
      delay: 0.4
    },
    {
      icon: Target,
      title: "Poor Qualification",
      description: "84% of leads aren't decision makers",
      metric: "84%",
      metricLabel: "Unqualified",
      delay: 0.5
    },
    {
      icon: AlertTriangle,
      title: "Manual Process",
      description: "Everything done by hand, prone to errors",
      metric: "100%",
      metricLabel: "Manual",
      delay: 0.6
    }
  ];

  const solutionCards = [
    {
      icon: CheckCircle,
      title: "Qualified Buyers",
      description: "89% pre-qualified, ready-to-buy leads",
      metric: "89%",
      metricLabel: "Qualified",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "Lower Cost",
      description: "Reduced to $52 per qualified lead",
      metric: "$52",
      metricLabel: "Cost/Lead",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Time Saved",
      description: "Only 8 hours/week on qualified leads",
      metric: "8hrs",
      metricLabel: "Weekly focus",
      delay: 0.3
    },
    {
      icon: Users,
      title: "High Conversion",
      description: "39.8% overall conversion rate",
      metric: "39.8%",
      metricLabel: "Conversion",
      delay: 0.4
    },
    {
      icon: Target,
      title: "Decision Makers",
      description: "87% are verified decision makers",
      metric: "87%",
      metricLabel: "Authority",
      delay: 0.5
    },
    {
      icon: TrendingUp,
      title: "Automated AI",
      description: "Fully automated qualification system",
      metric: "100%",
      metricLabel: "Automated",
      delay: 0.6
    }
  ];

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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
              From <span className="text-amber-400">Problem</span> to <span className="bronze-gradient-fix">Solution</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              See the dramatic transformation in your business metrics when you stop chasing ghost leads and start booking qualified buyers.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems Grid */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2 font-roboto flex items-center justify-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  Current Problems
                </h3>
                <div className="w-24 h-1 bg-amber-400 rounded mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: card.delay }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="h-full p-6 rounded-xl border border-amber-400/20 bg-[#1a1a1a]/60 backdrop-blur-sm hover:bg-amber-400/5 transition-all duration-300 hover:border-amber-400/40 cursor-pointer overflow-hidden">
                      <NoiseTexture opacity={0.06} />
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center justify-between">
                          <card.icon className="w-6 h-6 text-amber-400" />
                          <div className="text-right">
                            <div className="text-xl font-bold text-amber-400">{card.metric}</div>
                            <div className="text-xs text-white/40 uppercase tracking-wide">{card.metricLabel}</div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {card.title}
                        </h4>
                        
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2 font-roboto flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#efcc8a]" />
                  AI Solutions
                </h3>
                <div className="w-24 h-1 bg-[#efcc8a] rounded mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutionCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: card.delay }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="h-full p-6 rounded-xl border border-[#efcc8a]/20 bg-[#1a1a1a]/60 backdrop-blur-sm hover:bg-[#efcc8a]/5 transition-all duration-300 hover:border-[#efcc8a]/40 cursor-pointer overflow-hidden">
                      <NoiseTexture opacity={0.06} />
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center justify-between">
                          <card.icon className="w-6 h-6 text-[#efcc8a]" />
                          <div className="text-right">
                            <div className="text-xl font-bold text-[#efcc8a]">{card.metric}</div>
                            <div className="text-xs text-white/40 uppercase tracking-wide">{card.metricLabel}</div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white group-hover:text-[#efcc8a] transition-colors">
                          {card.title}
                        </h4>
                        
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
