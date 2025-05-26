
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "48-Hour Launch",
      description: "Complete AI system deployment within 48 hours with full integration testing.",
      icon: "🚀",
      color: "from-orange-400/30 to-red-500/40"
    },
    {
      title: "Precision Targeting", 
      description: "AI identifies qualified decision-makers using advanced behavioral analysis.",
      icon: "🎯",
      color: "from-blue-400/30 to-purple-500/40"
    },
    {
      title: "Automated Vetting",
      description: "Smart filters eliminate tire-kickers before they reach you.",
      icon: "🛡️",
      color: "from-green-400/30 to-emerald-500/40"
    },
    {
      title: "Calls Delivered",
      description: "Calendar-ready strategy calls with verified prospects.",
      icon: "📞",
      color: "from-[#efcc8a]/30 to-[#cd7f32]/40",
      highlighted: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced Layered Background */}
      <div className="absolute inset-0">
        {/* Flowing connection line background */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/30 to-transparent transform -translate-y-1/2"></div>
        
        {/* Dynamic floating elements */}
        <motion.div 
          className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-orange-400/25 to-red-500/35 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400/30 to-emerald-500/40 rounded-3xl flex items-center justify-center text-2xl shadow-lg"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎉
        </motion.div>
        
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#efcc8a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-[#cd7f32]/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Rich background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#171717] to-[#1a1a1a]/60"></div>
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      ></div>
      
      {/* Compact Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/15">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Compact Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-16 lg:py-20 space-y-8"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">How It</span>{" "}
                <span className="bronze-gradient-fix">Works</span>
              </h2>
              
              {/* Enhanced progress bar */}
              <motion.div 
                className="w-32 h-[3px] bg-white/10 relative mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32] shadow-[0_0_15px_rgba(239,204,138,0.6)]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              
              <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
                Four simple steps from setup to calendar-ready calls with qualified prospects.
              </p>
            </div>
          </motion.div>

          {/* Compact Journey Flow */}
          <div className="relative pb-12">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/15 transform -translate-y-1/2"></div>
            <motion.div 
              className="hidden lg:block absolute top-1/2 w-16 h-[2px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32] transform -translate-y-1/2"
              animate={{ 
                x: ["0%", "calc(100vw - 64px)", "0%"]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="relative"
                >
                  <div className={cn(
                    "relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 group hover:transform hover:scale-105",
                    step.highlighted 
                      ? "bg-gradient-to-br from-[#1c1c1c] to-[#1a1a1a] border-[#efcc8a]/40 shadow-[0_0_30px_rgba(239,204,138,0.15)]" 
                      : "bg-gradient-to-br from-[#1a1a1a] to-[#171717] border-white/20 hover:border-white/30",
                    "min-h-[280px] flex flex-col"
                  )}>
                    {/* Enhanced floating icon */}
                    <div className={cn(
                      "absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-xl transition-all duration-300 group-hover:scale-110",
                      `bg-gradient-to-br ${step.color}`
                    )}>
                      {step.icon}
                    </div>
                    
                    {/* Active step pulse */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-[#efcc8a]/40"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    
                    <div className="space-y-4 flex-grow flex flex-col justify-center">
                      <h3 className={cn(
                        "text-lg md:text-xl font-bold tracking-tight transition-colors duration-300",
                        step.highlighted 
                          ? "bronze-gradient-fix" 
                          : "text-white group-hover:text-[#efcc8a]"
                      )}>
                        {step.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-white/70 group-hover:text-white/85 transition-colors duration-300 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="text-xs text-[#efcc8a]/60 uppercase tracking-wider font-medium">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Connection point */}
                    <div className="absolute top-1/2 -right-3 w-2 h-2 bg-[#efcc8a]/50 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
                  </div>
                  
                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4 lg:hidden">
                      <ArrowDown className="w-5 h-5 text-[#efcc8a]/60" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Flow Guide Arrow */}
        <motion.div 
          className="flex justify-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-6 h-6 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
