
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { BarChart3, Crown, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function EarlyAdopterSection() {
  const features = [
    {
      title: "48-Hour Setup",
      description: "Complete AI lead qualification system deployed within 48 hours.",
      metric: "48hrs",
      metricLabel: "Setup Time",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Weekly Strategy",
      description: "Private optimization calls with our AI specialists to maximize ROI.",
      metric: "4x",
      metricLabel: "Average ROI", 
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Real-Time Intel",
      description: "Live dashboard showing every lead interaction and conversion opportunity.",
      metric: "100%",
      metricLabel: "Transparency",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "VIP Privileges",
      description: "Direct access to our team, priority features, and lifetime pricing protection.",
      metric: "24/7",
      metricLabel: "VIP Support",
      icon: <Crown className="w-5 h-5" />,
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
      
      {/* Full-width compact design with proper borders */}
      <div className="w-full relative z-10">
        {/* Compact Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-l border-r border-b border-white/10 p-8 bg-[#171717] relative"
        >
          {/* Texture background for header block */}
          <div 
            className="absolute inset-0 opacity-[0.12]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
          
          <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#efcc8a]/20 bg-[#efcc8a]/5">
              <Crown className="w-3 h-3 text-[#efcc8a]" />
              <span className="text-xs font-medium text-[#efcc8a] tracking-wider">FOUNDING PARTNER PROGRAM</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bronze-gradient-fix">Become Our</span>{" "}
              <span className="text-white">Founding Partner</span>
            </h2>
            
            <p className="text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
              Join an exclusive group of 50 solar & roofing leaders who get priority access, 
              personalized support, and help shape the future of AI-powered lead generation.
            </p>
            
            {/* Compact progress indicator */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-0.5 bg-[#efcc8a] rounded-full"></div>
                <span className="text-[#efcc8a] text-xs font-medium">13 spots remaining</span>
                <div className="w-6 h-0.5 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean 2x2 Grid with No Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-r border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={cn(
                "border-b border-white/10",
                index % 2 === 0 ? "md:border-r border-white/10" : ""
              )}
            >
              <Magnetic 
                intensity={0.02} 
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
                <div className="relative h-full p-6 bg-[#171717] transition-all duration-300 hover:bg-[#1a1a1a] group min-h-[160px]">
                  {/* Texture background */}
                  <div 
                    className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.15] transition-opacity duration-300" 
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-3 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div 
                      className="text-[#efcc8a] group-hover:text-[#efcc8a] transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    
                    {/* Metric display */}
                    <div className="flex items-center gap-3 pt-2 mt-auto">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-[#efcc8a]">{feature.metric}</span>
                        <span className="text-xs text-white/50 uppercase tracking-wider">{feature.metricLabel}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#efcc8a]/60 group-hover:text-[#efcc8a] group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Subtle hover border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/5"></div>
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
