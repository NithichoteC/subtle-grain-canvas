
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { BarChart3, Crown, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function EarlyAdopterSection() {
  const features = [
    {
      title: "48-Hour Setup",
      description: "Complete AI lead qualification system deployed within 48 hours of onboarding.",
      metric: "48hrs",
      metricLabel: "Setup Time",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Weekly Strategy",
      description: "Private optimization calls with our AI specialists to maximize your ROI.",
      metric: "4x",
      metricLabel: "Average ROI", 
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Real-Time Intel",
      description: "Live dashboard showing every lead interaction and conversion opportunity.",
      metric: "100%",
      metricLabel: "Transparency",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "VIP Privileges",
      description: "Direct access to our team, priority features, and lifetime pricing protection.",
      metric: "24/7",
      metricLabel: "VIP Support",
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Premium Container with Perfect Borders and Constrained Width */}
      <div className="w-full relative z-10">
        <div className="container max-w-6xl mx-auto border-l border-r border-white/10">
          {/* Sophisticated Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full border-b border-white/10 py-20 bg-[#171717] relative"
          >
            {/* Texture background for header */}
            <div 
              className="absolute inset-0 opacity-[0.12]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            ></div>
            
            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#efcc8a]/30 bg-[#efcc8a]/8 backdrop-blur-sm">
                <Crown className="w-4 h-4 text-[#efcc8a]" />
                <span className="text-sm font-medium text-[#efcc8a] tracking-[0.15em] uppercase">Founding Partner Program</span>
              </div>
              
              {/* Sophisticated Typography */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  <span className="bronze-gradient-fix">Become Our</span>{" "}
                  <span className="text-white">Founding Partner</span>
                </h2>
                
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                  Join an exclusive group of 50 solar & roofing leaders who get priority access, 
                  personalized support, and help shape the future of AI-powered lead generation.
                </p>
              </div>
              
              {/* Elegant Progress Indicator */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-[2px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32] rounded-full"></div>
                  <span className="text-[#efcc8a] text-sm font-medium tracking-wide">13 spots remaining</span>
                  <div className="w-8 h-[1px] bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Features Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={cn(
                  "border-b border-white/10",
                  index < 3 ? "lg:border-r border-white/10" : "",
                  index % 2 === 0 ? "md:border-r border-white/10" : ""
                )}
              >
                <Magnetic 
                  intensity={0.05} 
                  rangeX={60} 
                  rangeY={30} 
                  actionArea="self" 
                  shape="rectangular"
                  springOptions={{
                    stiffness: 120,
                    damping: 20,
                    mass: 0.4
                  }}
                >
                  <div className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-700 ease-out hover:bg-gradient-to-br hover:from-[#1c1c1c] hover:via-[#1a1a1a] hover:to-[#171717] group min-h-[320px] flex flex-col cursor-pointer">
                    {/* Enhanced Background Texture with Hover Effect */}
                    <div 
                      className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-700" 
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                      }}
                    ></div>
                    
                    {/* Premium Content Layout */}
                    <div className="relative z-10 space-y-6 h-full flex flex-col">
                      {/* Enhanced Icon with Hero-style Glow */}
                      <motion.div 
                        className="text-[#efcc8a] group-hover:text-[#ffd700] transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(239,204,138,0.4)]"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      
                      {/* Premium Typography with Hero-style Gradients */}
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-500 tracking-tight group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
                          {feature.title}
                        </h3>
                        
                        <p className="text-sm text-white/65 group-hover:text-white/85 transition-all duration-500 leading-relaxed font-light">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Enhanced Metric Display with Hero-style Effects */}
                      <div className="flex items-center justify-between pt-6 mt-auto border-t border-white/8 group-hover:border-[#efcc8a]/20 transition-all duration-500">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#efcc8a] group-hover:text-[#ffd700] transition-all duration-500 group-hover:drop-shadow-[0_0_6px_rgba(239,204,138,0.5)]">
                            {feature.metric}
                          </span>
                          <span className="text-xs text-white/40 group-hover:text-white/60 uppercase tracking-[0.1em] font-medium transition-colors duration-500">
                            {feature.metricLabel}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <ArrowRight className="w-4 h-4 text-[#efcc8a]/50 group-hover:text-[#efcc8a] transition-all duration-500 group-hover:drop-shadow-[0_0_4px_rgba(239,204,138,0.3)]" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Enhanced Luxury Border Effect with Hero-style Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                      <div className="absolute inset-0 border border-[#efcc8a]/15 rounded-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/8 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#efcc8a]/5 to-transparent"></div>
                    </div>
                  </div>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
