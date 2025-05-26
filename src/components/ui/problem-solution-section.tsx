
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Magnetic } from "@/components/ui/magnetic";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced Grid Pattern Background - Full Coverage and Visibility */}
      <div className="absolute inset-0">
        <GridPattern 
          width={40} 
          height={40} 
          x={-1} 
          y={-1} 
          strokeDasharray="4 2" 
          className={cn(
            "opacity-50 stroke-[#efcc8a]/60 fill-transparent",
            "[mask-image:linear-gradient(to_right,white_0%,white_100%,white)]"
          )} 
        />
      </div>

      {/* Simplified Background Elements - Repositioned for Balance */}
      <div className="absolute inset-0">
        {/* Left side floating icons */}
        <motion.div 
          className="absolute top-24 left-8 w-16 h-16 bg-gradient-to-br from-red-400/25 to-red-500/35 rounded-2xl flex items-center justify-center text-2xl shadow-xl" 
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0]
          }} 
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💀
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 left-16 w-14 h-14 bg-gradient-to-br from-red-400/20 to-orange-400/30 rounded-xl flex items-center justify-center text-xl shadow-sm" 
          animate={{
            y: [0, -6, 0],
            rotate: [0, 4, -4, 0]
          }} 
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⏰
        </motion.div>
        
        {/* Right side floating icons */}
        <motion.div 
          className="absolute top-20 right-8 w-18 h-18 bg-gradient-to-br from-[#efcc8a]/35 to-[#cd7f32]/45 rounded-2xl flex items-center justify-center text-2xl shadow-xl" 
          animate={{
            y: [0, -14, 0],
            rotate: [0, -4, 4, 0]
          }} 
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✅
        </motion.div>
        
        <motion.div 
          className="absolute bottom-28 right-14 w-14 h-14 bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35 rounded-xl flex items-center justify-center text-lg shadow-sm" 
          animate={{
            y: [0, -7, 0],
            rotate: [0, 3, -3, 0]
          }} 
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📅
        </motion.div>
      </div>
      
      {/* Premium Container - Exact Match to Early Adopter Section */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="py-16 lg:py-20 space-y-8"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">What Keeps You Up at Night</span>{" "}
                <span className="bronze-gradient-fix">And How We Solve It</span>
              </h2>
              
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
                Every solar and roofing executive faces the same challenge: turning expensive leads into profitable conversations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid Layout - Exact Match to Early Adopter Structure */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Pain Panel - Exact Border Structure */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="border-b border-white/10 lg:border-r border-white/10 relative"
            >
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular" 
                springOptions={{ stiffness: 140, damping: 25, mass: 0.3 }}
              >
                <div 
                  className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" 
                  style={{ minHeight: '400px' }}
                >
                  {/* Luxury Background Texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 text-red-400">💀</div>
                      <h3 className="text-xl font-bold text-red-400 tracking-tight leading-tight">
                        The Pain You Know Too Well
                      </h3>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-none border border-red-400/10">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">💸</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Ghost leads that vanish without replying</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Spending thousands on leads that never convert into conversations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-none border border-red-400/10">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">⚠️</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Ad dollars lost on tire-kick traffic</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Attracting lookers instead of serious buyers ready to invest</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-none border border-red-400/10">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">⏰</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Hours wasted chasing no-shows</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Your sales team burning time on unqualified prospects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-red-400/8"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-400/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Promise Panel - Exact Border Structure */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="border-b border-white/10 border-r border-white/10 relative"
            >
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular" 
                springOptions={{ stiffness: 140, damping: 25, mass: 0.3 }}
              >
                <div 
                  className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" 
                  style={{ minHeight: '400px' }}
                >
                  {/* Luxury Background Texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 text-[#efcc8a]">✅</div>
                      <h3 className="text-xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                        The Promise We Deliver
                      </h3>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-none border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">🎯</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Only decision-makers hit your calendar</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">AI pre-qualifies every lead for genuine buying intent and budget</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-none border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">⚡</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">AI filters out time-wasters automatically</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">Smart qualification process eliminates low-quality prospects</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-none border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">📅</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Strategy calls booked—no follow-up needed</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">Seamless booking flow with confirmed appointments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/8"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
        
        {/* Flow Guide Arrow */}
        <motion.div 
          className="flex justify-center py-8" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-6 h-6 text-[#efcc8a] animate-bounce">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
