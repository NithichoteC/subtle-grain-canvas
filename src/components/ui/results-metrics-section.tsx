
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
      {/* Enhanced Parallax Bronze Mesh Overlay */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='mesh' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,0 L20,0 L20,20 L0,20 Z' fill='none' stroke='%23efcc8a' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23mesh)'/%3E%3C/svg%3E")`
          }}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced Floating Bronze Trophy */}
        <motion.div 
          className="absolute top-16 right-20 w-16 h-16 bg-gradient-to-br from-[#efcc8a] to-[#cd7f32] rounded-2xl flex items-center justify-center text-[#171717] text-2xl shadow-2xl"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏆
        </motion.div>
        
        {/* Enhanced visual anchors behind odd cards */}
        <div className="absolute top-1/3 left-20 w-40 h-40 bg-[#efcc8a]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-40 w-32 h-32 bg-[#cd7f32]/8 rounded-full blur-2xl"></div>
        {/* Additional visual anchors */}
        <div className="absolute top-20 left-1/3 w-24 h-24 bg-[#ffd700]/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#efcc8a]/4 rounded-full blur-xl"></div>
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
                <span className="bronze-gradient-fix">Proven Results</span>{" "}
                <span className="text-white">That Speak for Themselves</span>
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
                Real metrics from real clients who transformed their lead generation with our AI system.
              </p>
            </div>
          </motion.div>

          {/* Enhanced KPI Grid with Responsive Reflow */}
          <div className="pb-20 mb-16">
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
                    "relative p-12 lg:p-16 bg-[#171717] group transition-all duration-500 hover:bg-[#1a1a1a] hover:transform hover:scale-105",
                    index > 0 ? "border-l border-white/10" : "",
                    "border-l border-white/10",
                    index === metrics.length - 1 ? "border-r border-white/10" : ""
                  )}
                >
                  <div className="text-center space-y-6">
                    {/* Enhanced Bronze Numerals with Count-up */}
                    <motion.div 
                      className="text-5xl lg:text-6xl xl:text-7xl font-bold bronze-gradient-fix"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {counts[index]}{metric.suffix}
                    </motion.div>
                    
                    <h3 className="text-xl md:text-2xl font-medium text-white/80 tracking-tight">
                      {metric.label}
                    </h3>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
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
                    "relative p-10 bg-[#171717] border-l border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a] hover:transform hover:scale-105",
                    index % 2 === 1 ? "border-r border-white/10" : "",
                    index >= 2 ? "border-t border-white/10" : ""
                  )}
                >
                  <div className="text-center space-y-5">
                    <motion.div 
                      className="text-5xl font-bold bronze-gradient-fix"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {counts[index]}{metric.suffix}
                    </motion.div>
                    
                    <h3 className="text-xl font-medium text-white/80 tracking-tight">
                      {metric.label}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
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
                  className="relative p-8 bg-[#171717] border-l border-r border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a] border-b border-white/10"
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
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                  </div>
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
