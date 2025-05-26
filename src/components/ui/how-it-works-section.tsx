
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "48-Hour Launch",
      description: "Complete AI system deployment within 48 hours of onboarding with full integration testing.",
      icon: "🚀",
      outlineIcon: "rocket",
      position: "top"
    },
    {
      title: "Precision Targeting", 
      description: "AI identifies and targets qualified decision-makers in your market using advanced behavioral analysis.",
      icon: "🎯",
      outlineIcon: "crosshair",
      position: "bottom"
    },
    {
      title: "Automated Vetting",
      description: "Smart qualification filters eliminate tire-kickers before they reach you, saving valuable time.",
      icon: "🛡️",
      outlineIcon: "shield-check",
      position: "top"
    },
    {
      title: "Calls Delivered",
      description: "Calendar-ready strategy calls with verified prospects who are ready to make decisions.",
      icon: "📞",
      outlineIcon: "phone-call",
      highlighted: true,
      position: "bottom"
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
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-16 w-36 h-36 bg-[#efcc8a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-24 w-44 h-44 bg-[#cd7f32]/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ffd700]/7 rounded-full blur-2xl"></div>
        {/* Additional visual anchors behind odd cards */}
        <div className="absolute top-16 left-1/4 w-20 h-20 bg-[#efcc8a]/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-16 right-1/4 w-24 h-24 bg-[#cd7f32]/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Enhanced background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/60 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Expanded Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Enhanced Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-32 lg:py-40 space-y-12"
          >
            {/* Left-aligned title with enhanced typography */}
            <div className="text-left space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]" style={{ lineHeight: '1.2' }}>
                <span className="text-white">How It</span>{" "}
                <span className="bronze-gradient-fix">Works</span>
              </h2>
              
              {/* Enhanced progress bar */}
              <motion.div 
                className="w-full h-[2px] bg-white/10 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              
              <p className="text-2xl md:text-3xl text-white/70 max-w-3xl leading-relaxed font-light" style={{ lineHeight: '1.6' }}>
                Four simple steps from setup to calendar-ready calls with qualified prospects.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Horizontal Storyboard with Zig-Zag Layout */}
          <div className="relative py-20 mb-16">
            {/* Enhanced Connecting Lines with Filament Glow */}
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center transform -translate-y-1/2">
              <div className="w-full max-w-6xl mx-auto relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/15"></div>
                {/* Enhanced animated filament glow */}
                <motion.div 
                  className="absolute top-0 w-20 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a] to-transparent"
                  animate={{ 
                    x: ["-80px", "calc(100% + 80px)"]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
            
            {/* Enhanced Steps Grid with Alternating Top/Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={cn(
                    "relative",
                    step.position === "bottom" ? "pt-32" : "pb-32"
                  )}
                >
                  {/* Enhanced Step Card */}
                  <div className={cn(
                    "relative p-8 lg:p-10 rounded-2xl border transition-all duration-500",
                    step.highlighted 
                      ? "bg-[#1a1a1a] border-[#efcc8a]/40 shadow-2xl shadow-[#efcc8a]/10" 
                      : "bg-[#171717] border-white/15 hover:border-white/25",
                    "group cursor-pointer hover:transform hover:scale-105"
                  )}>
                    {/* Enhanced 2.5D Step Icon */}
                    <div className="relative mb-8">
                      <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mx-auto transition-all duration-300 shadow-xl",
                        "bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35",
                        "group-hover:scale-110 group-hover:shadow-[#efcc8a]/30"
                      )}>
                        {step.icon}
                      </div>
                      
                      {/* Enhanced icon pulse animation */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-[#efcc8a]/40"
                        animate={activeStep === index ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0, 0.8]
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <h3 className={cn(
                        "text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300",
                        step.highlighted 
                          ? "bronze-gradient-fix" 
                          : "text-white group-hover:text-[#efcc8a]"
                      )}>
                        {step.title}
                      </h3>
                      
                      <p className="text-base md:text-lg text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed" style={{ lineHeight: '1.6' }}>
                        {step.description}
                      </p>
                      
                      {/* Enhanced step number */}
                      <div className="text-sm text-[#efcc8a]/50 uppercase tracking-wider font-medium">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Enhanced highlighted step enhancement */}
                    {step.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/8 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                    )}
                  </div>
                  
                  {/* Enhanced connection point for filament */}
                  <div className={cn(
                    "absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#efcc8a]/30 rounded-full shadow-lg",
                    step.position === "top" ? "bottom-0" : "top-0"
                  )}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Flow Guide Arrow */}
        <motion.div 
          className="flex justify-center py-12"
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
