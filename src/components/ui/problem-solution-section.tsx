import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Magnetic } from "@/components/ui/magnetic";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Clean Grid Pattern Background - keeping what you like */}
      <div className="absolute inset-0">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className={cn(
            "opacity-40 stroke-[#efcc8a]/50 fill-transparent",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Simplified Background - no color bands */}
      <div className="absolute inset-0">
        {/* Pain icons - responsive positioning */}
        <motion.div 
          className="absolute w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-2xl"
          style={{ left: '8%', top: '15%' }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
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
          className="absolute w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-xl"
          style={{ left: '2%', top: '50%' }}
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -8, 8, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚠️
        </motion.div>

        <motion.div 
          className="absolute w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35 rounded-lg flex items-center justify-center text-xl md:text-2xl shadow-lg"
          style={{ left: '6%', top: '75%' }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💸
        </motion.div>

        <motion.div 
          className="absolute w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#efcc8a]/20 to-[#cd7f32]/30 rounded-xl flex items-center justify-center text-lg md:text-xl shadow-md"
          style={{ left: '12%', top: '35%' }}
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 6, -6, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⏰
        </motion.div>
        
        {/* Promise icons - responsive positioning */}
        <motion.div 
          className="absolute w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#efcc8a]/35 to-[#cd7f32]/45 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-2xl"
          style={{ right: '8%', top: '15%' }}
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✅
        </motion.div>
        
        <motion.div 
          className="absolute w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ffd700]/40 to-[#efcc8a]/50 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-xl"
          style={{ right: '2%', top: '50%' }}
          animate={{ 
            y: [0, -14, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>

        <motion.div 
          className="absolute w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-[#cd7f32]/30 to-[#ffd700]/40 rounded-lg flex items-center justify-center text-xl md:text-2xl shadow-lg"
          style={{ right: '6%', top: '75%' }}
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -6, 6, 0]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎯
        </motion.div>

        <motion.div 
          className="absolute w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#efcc8a]/25 to-[#cd7f32]/35 rounded-xl flex items-center justify-center text-lg md:text-xl shadow-md"
          style={{ right: '12%', top: '25%' }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 4, -4, 0]
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
      
      {/* Clean texture overlay - no gradients that cause color bands */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Full-width Container with proper structure */}
      <div className="w-full relative z-10">
        {/* Header Section */}
        <div className="w-full border-l border-r border-white/10">
          <div className="max-w-[1400px] mx-auto px-[6%]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="py-16 lg:py-20 space-y-8"
            >
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  <span className="text-white">What Keeps You Up at Night—</span>{" "}
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
        </div>

        {/* Grid Layout - Full Width with Proper Container */}
        <div className="w-full border-l border-r border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Pain Panel - Grid Box Style */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border-b border-white/10 lg:border-r lg:border-b-0 border-white/10 relative"
            >
              <Magnetic intensity={0.03} rangeX={80} rangeY={40} actionArea="self" shape="rectangular" springOptions={{
                stiffness: 140,
                damping: 25,
                mass: 0.3
              }}>
                <div className="relative h-full p-8 lg:p-12 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{
                  minHeight: '500px'
                }}>
                  {/* Subtle noise texture like Early Adopter */}
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="relative z-10 space-y-8 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-xl flex items-center justify-center text-2xl">
                        💀
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#efcc8a] tracking-tight leading-tight">
                        The Pain You Know Too Well
                      </h3>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/10">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">💸</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Ghost leads that vanish without replying</h4>
                          <p className="text-white/60 text-sm">Spending thousands on leads that never convert into conversations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/10">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">⚠️</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Ad dollars lost on tire-kick traffic</h4>
                          <p className="text-white/60 text-sm">Attracting lookers instead of serious buyers ready to invest</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/10">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">⏰</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Hours wasted chasing no-shows</h4>
                          <p className="text-white/60 text-sm">Your sales team burning time on unqualified prospects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bronze hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/8"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Promise Panel - Grid Box Style */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border-b border-white/10 relative"
            >
              <Magnetic intensity={0.03} rangeX={80} rangeY={40} actionArea="self" shape="rectangular" springOptions={{
                stiffness: 140,
                damping: 25,
                mass: 0.3
              }}>
                <div className="relative h-full p-8 lg:p-12 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col" style={{
                  minHeight: '500px'
                }}>
                  {/* Subtle noise texture like Early Adopter */}
                  <div 
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="relative z-10 space-y-8 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#efcc8a]/40 to-[#cd7f32]/50 rounded-xl flex items-center justify-center text-2xl">
                        ✅
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                        The Promise We Deliver
                      </h3>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">🎯</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Only decision-makers hit your calendar</h4>
                          <p className="text-white/70 text-sm">AI pre-qualifies every lead for genuine buying intent and budget</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">⚡</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">AI filters out time-wasters automatically</h4>
                          <p className="text-white/70 text-sm">Smart qualification process eliminates low-quality prospects</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 rounded-2xl border border-[#efcc8a]/15">
                        <span className="text-[#efcc8a] text-2xl mt-1 flex-shrink-0">📅</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Strategy calls booked—no follow-up needed</h4>
                          <p className="text-white/70 text-sm">Seamless booking flow with confirmed appointments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bronze hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/8"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
        
        {/* Flow Guide Arrow - no borders */}
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
