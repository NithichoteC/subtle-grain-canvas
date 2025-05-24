import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar, Users, BarChart3, Crown, ArrowRight, Clock, Shield, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export function EarlyAdopterSection() {
  const bentoBlocks = [
    {
      id: "hero",
      title: "Become Our Founding Partner",
      subtitle: "Join an Exclusive Group of Industry Leaders",
      description: "Partner with us to revolutionize solar & roofing lead generation. Get priority access, personalized support, and shape the future of our AI system.",
      badge: "Founding Partner Program",
      icon: <Crown className="w-8 h-8" />,
      size: "large" as const,
      position: "hero",
      cta: true
    },
    {
      id: "setup",
      title: "Lightning-Fast Setup",
      description: "Custom AI workflows adapted to your exact sales process and operational within 48 hours.",
      metric: "48hr",
      metricLabel: "Setup Time",
      icon: <Zap className="w-6 h-6" />,
      size: "medium" as const,
      position: "top-right"
    },
    {
      id: "strategy",
      title: "Weekly Strategy Sessions",
      description: "One-on-one optimization calls to maximize your ROI and conversion rates.",
      metric: "4x",
      metricLabel: "ROI Boost",
      icon: <Target className="w-6 h-6" />,
      size: "medium" as const,
      position: "bottom-left"
    },
    {
      id: "dashboard",
      title: "Real-Time Transparency",
      description: "Watch qualified leads flow in with complete visibility on every interaction.",
      metric: "100%",
      metricLabel: "Transparency",
      icon: <BarChart3 className="w-6 h-6" />,
      size: "medium" as const,
      position: "bottom-center"
    },
    {
      id: "support",
      title: "VIP Partner Access",
      description: "Direct line to our team and priority influence on new features.",
      metric: "24/7",
      metricLabel: "Support",
      icon: <Shield className="w-6 h-6" />,
      size: "medium" as const,
      position: "bottom-right"
    }
  ];

  return (
    <div className="w-full py-32 relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Ambient cursor glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#efcc8a]/5 rounded-full blur-3xl opacity-0 transition-opacity duration-500 hover:opacity-100" 
             style={{ transform: 'translate(var(--mouse-x, 50%), var(--mouse-y, 50%))' }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Bento Grid Layout - 5 blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          {bentoBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={cn(
                "relative group/card",
                // Hero block spans 2 columns and full height
                block.position === "hero" && "md:col-span-2 md:row-span-2",
                // Other blocks are single column
                block.position !== "hero" && "md:col-span-1 md:row-span-1"
              )}
            >
              <Magnetic 
                intensity={0.05} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular"
                springOptions={{
                  stiffness: 150,
                  damping: 20,
                  mass: 0.4
                }}
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#efcc8a]/30 hover:bg-gradient-to-br hover:from-[#efcc8a]/[0.12] hover:to-[#efcc8a]/[0.04] flex flex-col justify-between">
                  {/* Badge for hero block */}
                  {block.badge && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#efcc8a]/20 bg-[#efcc8a]/10 mb-4">
                      <Crown className="w-3 h-3 text-[#efcc8a]" />
                      <span className="text-xs font-medium text-[#efcc8a] tracking-wider uppercase">{block.badge}</span>
                    </div>
                  )}

                  {/* Content area */}
                  <div className="flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div 
                      className="mb-6 relative z-10 text-[#efcc8a] group-hover/card:text-[#efcc8a] transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {block.icon}
                    </motion.div>
                    
                    {/* Title and content */}
                    <div className="relative z-10 space-y-4 flex-1">
                      {block.subtitle && (
                        <p className="text-sm text-[#efcc8a]/80 font-medium tracking-wide">
                          {block.subtitle}
                        </p>
                      )}
                      
                      <h3 className={cn(
                        "font-bold text-white group-hover/card:text-white transition-colors duration-300",
                        block.position === "hero" ? "text-3xl md:text-4xl" : "text-xl"
                      )}>
                        {block.title}
                      </h3>
                      
                      <p className={cn(
                        "text-white/70 group-hover/card:text-white/90 transition-colors duration-300 leading-relaxed",
                        block.position === "hero" ? "text-base" : "text-sm"
                      )}>
                        {block.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom section - Metrics or CTA */}
                  <div className="relative z-10 pt-6">
                    {block.metric ? (
                      <div className="flex items-center gap-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#efcc8a]">{block.metric}</span>
                          <span className="text-xs text-white/50 uppercase tracking-wider">{block.metricLabel}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#efcc8a]/60 group-hover/card:text-[#efcc8a] group-hover/card:translate-x-1 transition-all duration-300" />
                      </div>
                    ) : block.cta ? (
                      <div className="space-y-4">
                        {/* Progress indicator */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">Limited to 50 founding partners</span>
                            <span className="text-[#efcc8a]">37 spots remaining</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-[#efcc8a] rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <Magnetic 
                          intensity={0.08} 
                          rangeX={120} 
                          rangeY={50} 
                          actionArea="global" 
                          shape="elliptical"
                          springOptions={{
                            stiffness: 120,
                            damping: 18,
                            mass: 0.4
                          }}
                        >
                          <GradientButton className="w-full gap-2 flex items-center justify-center text-base font-roboto py-[14px] px-8">
                            <span className="text-white whitespace-nowrap">Secure Your Founding Partner Spot</span>
                            <Calendar className="w-5 h-5 text-white flex-shrink-0" />
                          </GradientButton>
                        </Magnetic>
                        
                        <p className="text-white/50 text-xs text-center">
                          No upfront fees • Cancel anytime • 30-day money-back guarantee
                        </p>
                      </div>
                    ) : null}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/5 via-transparent to-[#efcc8a]/5 rounded-2xl"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
