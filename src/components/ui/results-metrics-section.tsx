
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function ResultsMetricsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const metrics = [
    { value: 1200, suffix: "+", label: "Leads Vetted", duration: 2000 },
    { value: 4, suffix: "×", label: "Avg ROI", duration: 1500 },
    { value: 98, suffix: "%", label: "Call Rate", duration: 1800 },
    { value: 50, suffix: "", label: "Pilot Spots Open", duration: 2200 }
  ];

  useEffect(() => {
    if (isInView) {
      metrics.forEach((metric, index) => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / metric.duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(metric.value * easeOut);
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = currentValue;
            return newCounts;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 200);
      });
    }
  }, [isInView]);

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden" ref={ref}>
      {/* Parallax Bronze Mesh Overlay */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='mesh' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,0 L20,0 L20,20 L0,20 Z' fill='none' stroke='%23efcc8a' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23mesh)'/%3E%3C/svg%3E")`
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Bronze Trophy */}
        <motion.div 
          className="absolute top-10 right-16 w-12 h-12 bg-gradient-to-br from-[#efcc8a] to-[#cd7f32] rounded-lg flex items-center justify-center text-[#171717] text-xl shadow-lg"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏆
        </motion.div>
        
        {/* Visual anchors behind odd cards */}
        <div className="absolute top-1/3 left-16 w-28 h-28 bg-[#efcc8a]/4 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-32 w-20 h-20 bg-[#cd7f32]/6 rounded-full blur-xl"></div>
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
                <span className="bronze-gradient-fix">Proven Results</span>{" "}
                <span className="text-white">That Speak for Themselves</span>
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
                Real metrics from real clients who transformed their lead generation with our AI system.
              </p>
            </div>
          </motion.div>

          {/* KPI Grid with Responsive Reflow */}
          <div className="pb-16">
            {/* Desktop: Full-width carousel */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-0 border-b border-white/10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={cn(
                    "relative p-8 lg:p-12 bg-[#171717] group transition-all duration-500 hover:bg-[#1a1a1a]",
                    index > 0 ? "border-l border-white/10" : "",
                    "border-l border-white/10",
                    index === metrics.length - 1 ? "border-r border-white/10" : ""
                  )}
                >
                  <div className="text-center space-y-4">
                    {/* Bronze Numerals with Count-up */}
                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold bronze-gradient-fix"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {counts[index]}{metric.suffix}
                    </motion.div>
                    
                    <h3 className="text-lg font-medium text-white/80 tracking-tight">
                      {metric.label}
                    </h3>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Tablet: 2x2 Grid */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-0 border-b border-white/10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={cn(
                    "relative p-8 bg-[#171717] border-l border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a]",
                    index % 2 === 1 ? "border-r border-white/10" : "",
                    index >= 2 ? "border-t border-white/10" : ""
                  )}
                >
                  <div className="text-center space-y-4">
                    <motion.div 
                      className="text-4xl font-bold bronze-gradient-fix"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {counts[index]}{metric.suffix}
                    </motion.div>
                    
                    <h3 className="text-lg font-medium text-white/80 tracking-tight">
                      {metric.label}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile: Stacked */}
            <div className="md:hidden space-y-0 border-b border-white/10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="relative p-6 bg-[#171717] border-l border-r border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a] border-b border-white/10"
                >
                  <div className="text-center space-y-3">
                    <motion.div 
                      className="text-3xl font-bold bronze-gradient-fix"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {counts[index]}{metric.suffix}
                    </motion.div>
                    
                    <h3 className="text-base font-medium text-white/80 tracking-tight">
                      {metric.label}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent"></div>
                  </div>
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
