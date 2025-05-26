
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Ghost } from "lucide-react";

export function ProblemSolutionSection() {
  const painPoints = [
    "Ghost leads that vanish without replying",
    "Ad dollars lost on unqualified traffic", 
    "Hours lost chasing no-shows and time-wasters"
  ];

  const solutions = [
    "Decision-makers only land on your calendar",
    "AI filters out tire-kickers before they waste time",
    "Calendar-ready strategy calls—no chasing required"
  ];

  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Soft bronze light spots */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#efcc8a]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#cd7f32]/8 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#ffd700]/6 rounded-full blur-md"></div>
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
      
      {/* Premium Container with Perfect Borders */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full border border-[#efcc8a]/20 py-16 bg-[#1a1a1a] mx-auto max-w-5xl my-8 rounded-sm"
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
          }}
        >
          {/* 2.5D Alarm Clock Placeholder */}
          <div className="absolute top-4 right-8 w-12 h-12 bg-gradient-to-br from-[#efcc8a] to-[#cd7f32] rounded-full flex items-center justify-center text-[#171717] font-bold text-lg shadow-lg">
            ⏰
          </div>
          
          <div 
            className="absolute inset-0 opacity-[0.12]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
          
          <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">What Keeps You Up at Night —</span>{" "}
                <span className="bronze-gradient-fix">And How We Solve It</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                We get it. You're not short on leads — you're drowning in the wrong ones.
                <br />
                Here's what we filter out — and what we replace it with.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced 2-Column Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            {/* Animated Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block">
              <motion.div 
                className="w-full h-8 bg-gradient-to-b from-[#efcc8a] via-[#cd7f32] to-transparent"
                animate={{ 
                  y: ["0%", "100%", "0%"],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Left Column - Pain Points */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="border-b border-white/10 lg:border-r border-white/10 border-l border-white/10 relative group"
            >
              {/* Scroll-triggered bronze glow */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileInView={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular"
                springOptions={{
                  stiffness: 140,
                  damping: 25,
                  mass: 0.3
                }}
              >
                <div className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{ minHeight: '320px' }}>
                  {/* Ghost 2.5D Placeholder */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-red-400/20 to-red-600/30 rounded-lg flex items-center justify-center">
                    <Ghost className="w-5 h-5 text-red-400/60" />
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-400 tracking-tight">
                        The Problem
                      </h3>
                      
                      <div className="space-y-4">
                        {painPoints.map((pain, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-red-400/60 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-white/65 group-hover:text-white/80 transition-colors duration-400 leading-relaxed font-light">
                              {pain}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-red-400/8 rounded-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-400/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Right Column - Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="border-b border-white/10 border-r border-white/10 relative group"
            >
              {/* Scroll-triggered bronze glow */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileInView={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular"
                springOptions={{
                  stiffness: 140,
                  damping: 25,
                  mass: 0.3
                }}
              >
                <div className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{ minHeight: '320px' }}>
                  {/* Calendar Checkmark 2.5D Placeholder */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#efcc8a]/80" />
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-400 tracking-tight">
                        Our Solution
                      </h3>
                      
                      <div className="space-y-4">
                        {solutions.map((solution, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#efcc8a]/80 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-white/65 group-hover:text-white/80 transition-colors duration-400 leading-relaxed font-light">
                              {solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/8 rounded-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
