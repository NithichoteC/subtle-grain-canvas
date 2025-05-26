
"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, BarChart3 } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";

/**
 * Feature Highlights Section
 * Three cards showcasing key features with hover effects and bronze accents
 */
export function FeatureHighlightsSection() {
  const features = [
    {
      icon: Brain,
      headline: "Intelligent Qualification",
      copy: "AI sorts & ranks leads in seconds.",
      delay: 0.1
    },
    {
      icon: Calendar,
      headline: "Instant Scheduling", 
      copy: "Auto-book meetings with decision-makers.",
      delay: 0.2
    },
    {
      icon: BarChart3,
      headline: "Real-Time Insights",
      copy: "Live dashboard tracks your ROI.",
      delay: 0.3
    }
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
              <span className="bronze-gradient-fix">Feature</span> Highlights
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              Three core capabilities that transform your lead generation process
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Feature Card */}
                <div className="relative h-full p-8 rounded-xl border border-white/10 bg-[#1a1a1a]/60 backdrop-blur-sm hover:bg-[#1f1f1f]/80 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-[#efcc8a]/30 cursor-pointer overflow-hidden">
                  {/* Noise texture */}
                  <NoiseTexture opacity={0.08} />
                  
                  {/* Bronze gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#efcc8a]/5 via-transparent to-[#cd7f32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-[#efcc8a]/10 flex items-center justify-center mb-6 group-hover:bg-[#efcc8a]/20 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-[#efcc8a] group-hover:text-[#ffd700] transition-colors duration-300" />
                    </div>
                    
                    {/* Headline */}
                    <h3 className="text-2xl font-semibold text-white mb-4 font-roboto group-hover:text-[#efcc8a] transition-colors duration-300">
                      {feature.headline}
                    </h3>
                    
                    {/* Copy */}
                    <p className="text-lg text-white/70 font-roboto leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.copy}
                    </p>
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
