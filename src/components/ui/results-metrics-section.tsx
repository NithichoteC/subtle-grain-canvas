
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function ResultsMetricsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const metrics = [
    { value: 1200, suffix: "+", label: "Leads Vetted", duration: 2000, color: "from-blue-400/30 to-purple-500/40" },
    { value: 4, suffix: "×", label: "Avg ROI", duration: 1500, color: "from-[#efcc8a]/30 to-[#cd7f32]/40" },
    { value: 98, suffix: "%", label: "Call Rate", duration: 1800, color: "from-green-400/30 to-emerald-500/40" },
    { value: 50, suffix: "", label: "Pilot Spots Open", duration: 2200, color: "from-orange-400/30 to-red-500/40" }
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
      {/* Enhanced Layered Background */}
      <div className="absolute inset-0">
        {/* Floating trophy with enhanced animation */}
        <motion.div 
          className="absolute top-16 right-20 w-24 h-24 bg-gradient-to-br from-[#ffd700] to-[#efcc8a] rounded-3xl flex items-center justify-center text-[#171717] text-3xl shadow-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏆
        </motion.div>
        
        {/* Dynamic chart elements */}
        <motion.div 
          className="absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-500/40 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📈
        </motion.div>
        
        {/* Background blobs */}
        <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-[#efcc8a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-[#cd7f32]/10 rounded-full blur-2xl"></div>
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
                <span className="bronze-gradient-fix">Proven Results</span>{" "}
                <span className="text-white">That Speak for Themselves</span>
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
                Real metrics from real clients who transformed their lead generation with our AI system.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Metrics Showcase */}
          <div className="pb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                  className="relative"
                >
                  <div className="relative p-6 lg:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#171717] border border-white/20 rounded-2xl group transition-all duration-500 hover:border-[#efcc8a]/40 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(239,204,138,0.15)]">
                    {/* Floating accent */}
                    <div className={cn(
                      "absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-lg transition-all duration-300 group-hover:scale-110",
                      `bg-gradient-to-br ${metric.color}`
                    )}>
                      {index === 0 ? "👥" : index === 1 ? "💰" : index === 2 ? "📞" : "🎯"}
                    </div>
                    
                    <div className="text-center space-y-3">
                      {/* Animated number */}
                      <motion.div 
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold bronze-gradient-fix"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {counts[index]}{metric.suffix}
                      </motion.div>
                      
                      <h3 className="text-base md:text-lg font-medium text-white/80 tracking-tight">
                        {metric.label}
                      </h3>
                    </div>
                    
                    {/* Enhanced hover effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/8 via-transparent to-transparent rounded-2xl"></div>
                    </div>
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
          <div className="w-6 h-6 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
