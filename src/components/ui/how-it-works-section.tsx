
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "48-Hour Launch",
      description: "Complete AI system deployment within 48 hours of onboarding.",
      icon: "🚀",
      outlineIcon: "rocket",
      position: "top"
    },
    {
      title: "Precision Targeting", 
      description: "AI identifies and targets qualified decision-makers in your market.",
      icon: "🎯",
      outlineIcon: "crosshair",
      position: "bottom"
    },
    {
      title: "Automated Vetting",
      description: "Smart qualification filters eliminate tire-kickers before they reach you.",
      icon: "🛡️",
      outlineIcon: "shield-check",
      position: "top"
    },
    {
      title: "Calls Delivered",
      description: "Calendar-ready strategy calls with verified prospects.",
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
      {/* Organic Background Elements - visual anchors behind odd cards */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-[#efcc8a]/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-[#cd7f32]/4 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#ffd700]/5 rounded-full blur-lg"></div>
      </div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Premium Container with 10% horizontal margins */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="max-w-7xl mx-auto px-[10%]">
          {/* Header Section with Progress Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="py-20 space-y-8"
          >
            {/* Left-aligned title */}
            <div className="text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]" style={{ lineHeight: '1.5' }}>
                <span className="text-white">How It</span>{" "}
                <span className="bronze-gradient-fix">Works</span>
              </h2>
              
              {/* Progress bar that fills on scroll */}
              <motion.div 
                className="w-full h-px bg-white/10 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-px bg-[#efcc8a]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              
              <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light" style={{ lineHeight: '1.5' }}>
                Four simple steps from setup to calendar-ready calls with qualified prospects.
              </p>
            </div>
          </motion.div>

          {/* Horizontal Storyboard with Zig-Zag Layout */}
          <div className="relative py-16">
            {/* Connecting Lines with Filament Glow */}
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center transform -translate-y-1/2">
              <div className="w-full max-w-5xl mx-auto relative">
                <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
                {/* Animated filament glow */}
                <motion.div 
                  className="absolute top-0 w-16 h-px bg-gradient-to-r from-transparent via-[#efcc8a] to-transparent"
                  animate={{ 
                    x: ["-64px", "calc(100% + 64px)"]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
            
            {/* Steps Grid with Alternating Top/Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    step.position === "bottom" ? "pt-24" : "pb-24"
                  )}
                >
                  {/* Step Card */}
                  <div className={cn(
                    "relative p-6 rounded-lg border transition-all duration-500",
                    step.highlighted 
                      ? "bg-[#1a1a1a] border-[#efcc8a]/30 shadow-lg" 
                      : "bg-[#171717] border-white/10 hover:border-white/20",
                    "group cursor-pointer"
                  )}>
                    {/* 2.5D Step Icon */}
                    <div className="relative mb-6">
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto transition-all duration-300",
                        "bg-gradient-to-br from-[#efcc8a]/20 to-[#cd7f32]/30 shadow-lg",
                        "group-hover:scale-110 group-hover:shadow-[#efcc8a]/20"
                      )}>
                        {step.icon}
                      </div>
                      
                      {/* Icon pulse animation triggered by glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#efcc8a]/30"
                        animate={activeStep === index ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0, 0.8]
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h3 className={cn(
                        "text-lg font-bold tracking-tight transition-colors duration-300",
                        step.highlighted 
                          ? "bronze-gradient-fix" 
                          : "text-white group-hover:text-[#efcc8a]"
                      )}>
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Step number */}
                      <div className="text-xs text-[#efcc8a]/40 uppercase tracking-wider">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Highlighted step enhancement */}
                    {step.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent rounded-lg pointer-events-none"></div>
                    )}
                  </div>
                  
                  {/* Connection point for filament */}
                  <div className={cn(
                    "absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/20 rounded-full",
                    step.position === "top" ? "bottom-0" : "top-0"
                  )}></div>
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
          <div className="w-4 h-4 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
