
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar, Users, BarChart3, Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function EarlyAdopterSection() {
  const features = [
    {
      title: "Tailored AI Setup & Launch",
      description: "We adapt our AI workflows to your exact sales process and get you operational within 48 hours.",
      metric: "48hr",
      metricLabel: "Setup Time",
      icon: <Users className="w-6 h-6" />,
      size: "large" as const,
      number: "01"
    },
    {
      title: "Weekly Strategy Calls",
      description: "One-on-one optimization sessions to maximize your ROI and conversion rates.",
      metric: "4x",
      metricLabel: "ROI Boost",
      icon: <BarChart3 className="w-6 h-6" />,
      size: "medium" as const,
      number: "02"
    },
    {
      title: "Real-Time Dashboard",
      description: "Watch qualified leads flow in with complete transparency on every interaction.",
      metric: "100%",
      metricLabel: "Transparency",
      icon: <Calendar className="w-6 h-6" />,
      size: "medium" as const,
      number: "03"
    },
    {
      title: "VIP Partner Access",
      description: "Direct line to our team and priority influence on new features and integrations.",
      metric: "24/7",
      metricLabel: "Support",
      icon: <Crown className="w-6 h-6" />,
      size: "large" as const,
      number: "04"
    },
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
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header with enhanced typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#efcc8a]/20 bg-[#efcc8a]/5 mb-4">
            <Crown className="w-4 h-4 text-[#efcc8a]" />
            <span className="text-sm font-medium text-[#efcc8a] tracking-wider">FOUNDING PARTNER PROGRAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bronze-gradient-fix">Become Our First</span>{" "}
            <span className="text-white">Success Story</span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Join an exclusive group of solar & roofing leaders who get priority access to our AI system, 
            personalized support, and shape the future of lead generation.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={cn(
                "relative group/card",
                feature.size === "large" ? "md:col-span-2" : "md:col-span-1"
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
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#efcc8a]/30 hover:bg-gradient-to-br hover:from-[#efcc8a]/[0.12] hover:to-[#efcc8a]/[0.04]">
                  {/* Card number */}
                  <div className="absolute top-4 right-6 text-6xl font-bold text-white/[0.06] group-hover/card:text-[#efcc8a]/[0.12] transition-colors duration-500">
                    {feature.number}
                  </div>
                  
                  {/* Icon with micro-animation */}
                  <motion.div 
                    className="mb-6 relative z-10 text-[#efcc8a] group-hover/card:text-[#efcc8a] transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover/card:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 group-hover/card:text-white/90 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Metric display */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#efcc8a]">{feature.metric}</span>
                        <span className="text-xs text-white/50 uppercase tracking-wider">{feature.metricLabel}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#efcc8a]/60 group-hover/card:text-[#efcc8a] group-hover/card:translate-x-1 transition-all duration-300" />
                    </div>
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

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <div className="space-y-3">
            <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
              Limited to 50 founding partners
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-20 h-1 bg-[#efcc8a] rounded-full"></div>
              <span className="text-[#efcc8a] text-sm font-medium">37 spots remaining</span>
              <div className="w-8 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
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
            <GradientButton className="gap-2 flex items-center text-base font-roboto py-[14px] px-8 text-lg">
              <span className="text-white whitespace-nowrap">Secure Your Founding Partner Spot</span>
              <Calendar className="w-5 h-5 text-white flex-shrink-0" />
            </GradientButton>
          </Magnetic>
          
          <p className="text-white/50 text-sm">
            No upfront fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </div>
  );
}
