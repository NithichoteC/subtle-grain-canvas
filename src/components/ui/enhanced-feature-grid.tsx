
"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, BarChart3, Shield, Zap, Users, Target, Phone, Clock, Award } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";

/**
 * Enhanced Feature Grid Section
 * Expanded grid showcasing all key features and benefits
 */
export function EnhancedFeatureGrid() {
  const features = [
    {
      icon: Brain,
      headline: "AI Lead Scoring",
      copy: "Intelligent qualification ranks leads by conversion probability.",
      metric: "94%",
      metricLabel: "Accuracy",
      delay: 0.1
    },
    {
      icon: Calendar,
      headline: "Auto Scheduling", 
      copy: "Instant calendar booking with pre-qualified decision makers.",
      metric: "73%",
      metricLabel: "Show Rate",
      delay: 0.2
    },
    {
      icon: BarChart3,
      headline: "Live Analytics",
      copy: "Real-time dashboard tracking ROI and conversion metrics.",
      metric: "24/7",
      metricLabel: "Monitoring",
      delay: 0.3
    },
    {
      icon: Shield,
      headline: "Quality Guarantee",
      copy: "Every lead verified for budget, authority, and timing.",
      metric: "100%",
      metricLabel: "Verified",
      delay: 0.4
    },
    {
      icon: Zap,
      headline: "Instant Setup",
      copy: "Complete AI system deployed within 48 hours.",
      metric: "48hrs",
      metricLabel: "Deployment",
      delay: 0.5
    },
    {
      icon: Users,
      headline: "Team Integration",
      copy: "Seamless CRM sync and sales team collaboration tools.",
      metric: "5min",
      metricLabel: "CRM Sync",
      delay: 0.6
    },
    {
      icon: Target,
      headline: "Precision Targeting",
      copy: "Advanced algorithms identify your ideal customer profile.",
      metric: "89%",
      metricLabel: "Match Rate",
      delay: 0.7
    },
    {
      icon: Phone,
      headline: "Smart Follow-up",
      copy: "Automated nurture sequences for maximum engagement.",
      metric: "5x",
      metricLabel: "Response",
      delay: 0.8
    },
    {
      icon: Clock,
      headline: "Time Savings",
      copy: "Eliminate 80% of manual lead qualification work.",
      metric: "80%",
      metricLabel: "Time Saved",
      delay: 0.9
    },
    {
      icon: Award,
      headline: "Proven Results",
      copy: "Average 40x ROI improvement within 90 days.",
      metric: "40x",
      metricLabel: "ROI Boost",
      delay: 1.0
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
              <span className="bronze-gradient-fix">Complete</span> AI Lead System
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              Everything you need to transform your lead generation and close more deals
            </p>
          </motion.div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className={`group relative ${
                  index >= 8 ? 'lg:col-span-1 lg:col-start-2' : ''
                } ${index === 9 ? 'lg:col-span-1' : ''}`}
              >
                <div className="relative h-full p-6 rounded-xl border border-white/10 bg-[#1a1a1a]/60 backdrop-blur-sm hover:bg-[#1f1f1f]/80 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-[#efcc8a]/30 cursor-pointer overflow-hidden min-h-[280px] flex flex-col">
                  <NoiseTexture opacity={0.08} />
                  
                  {/* Bronze gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#efcc8a]/5 via-transparent to-[#cd7f32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon and Metric */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#efcc8a]/10 flex items-center justify-center group-hover:bg-[#efcc8a]/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-[#efcc8a] group-hover:text-[#ffd700] transition-colors duration-300" />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#efcc8a] group-hover:text-[#ffd700] transition-colors duration-300">
                          {feature.metric}
                        </div>
                        <div className="text-xs text-white/40 uppercase tracking-wide">
                          {feature.metricLabel}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3 font-roboto group-hover:text-[#efcc8a] transition-colors duration-300">
                        {feature.headline}
                      </h3>
                      
                      <p className="text-sm text-white/70 font-roboto leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {feature.copy}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle border accent */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#efcc8a]/20 transition-colors duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
