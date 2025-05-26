
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className={cn(
            "opacity-20 stroke-[#efcc8a]/30 fill-transparent",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Enhanced Layered Background Elements */}
      <div className="absolute inset-0">
        {/* Bronze wave behind content */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-br from-[#efcc8a]/12 via-transparent to-[#cd7f32]/8 blur-3xl"></div>
        
        {/* Pain icons - left side */}
        <motion.div 
          className="absolute top-16 left-12 w-20 h-20 bg-gradient-to-br from-red-400/25 to-red-500/35 rounded-2xl flex items-center justify-center text-3xl shadow-2xl"
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
          className="absolute top-48 left-8 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-400/40 rounded-xl flex items-center justify-center text-2xl shadow-xl"
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
          className="absolute bottom-24 left-16 w-18 h-18 bg-gradient-to-br from-red-500/25 to-orange-500/35 rounded-lg flex items-center justify-center text-2xl shadow-lg"
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
        
        {/* Promise icons - right side */}
        <motion.div 
          className="absolute top-20 right-12 w-20 h-20 bg-gradient-to-br from-[#efcc8a]/35 to-[#cd7f32]/45 rounded-2xl flex items-center justify-center text-3xl shadow-2xl"
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
          className="absolute top-52 right-8 w-16 h-16 bg-gradient-to-br from-[#ffd700]/40 to-[#efcc8a]/50 rounded-xl flex items-center justify-center text-2xl shadow-xl"
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
          className="absolute bottom-28 right-16 w-18 h-18 bg-gradient-to-br from-[#cd7f32]/30 to-[#ffd700]/40 rounded-lg flex items-center justify-center text-2xl shadow-lg"
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
        
        {/* Bronze glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#efcc8a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#cd7f32]/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Rich background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#171717]/80 to-[#1a1a1a]/60"></div>
      
      {/* Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          {/* Compact Header Section */}
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

          {/* Enhanced Split Panels with Sophisticated Divider */}
          <div className="relative pb-16">
            {/* Sophisticated central divider */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#efcc8a]/40 to-transparent"></div>
            
            {/* Central decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#efcc8a] to-[#cd7f32] rounded-full shadow-lg border border-[#efcc8a]/30"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-[#efcc8a]/50 to-[#cd7f32]/50 rounded-full blur-md"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#171717] text-xs font-bold">VS</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Pain Panel - Enhanced Design */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="relative p-10 lg:p-12 bg-gradient-to-br from-[#1c1c1c]/90 to-[#171717]/90 border border-red-400/20 rounded-3xl group transition-all duration-500 hover:border-red-400/40 hover:shadow-[0_0_40px_rgba(248,113,113,0.15)] backdrop-blur-sm">
                  
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 opacity-[0.06] rounded-3xl" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '150px 150px'
                  }}></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400/30 to-red-500/40 rounded-xl flex items-center justify-center text-2xl">
                        💀
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-red-400 tracking-tight leading-tight">
                        The Pain You Know Too Well
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-2xl border border-red-400/10">
                        <span className="text-red-400 text-2xl mt-1 flex-shrink-0">💸</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Ghost leads that vanish without replying</h4>
                          <p className="text-white/60 text-sm">Spending thousands on leads that never convert into conversations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-2xl border border-red-400/10">
                        <span className="text-red-400 text-2xl mt-1 flex-shrink-0">⚠️</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Ad dollars lost on tire-kick traffic</h4>
                          <p className="text-white/60 text-sm">Attracting lookers instead of serious buyers ready to invest</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 rounded-2xl border border-red-400/10">
                        <span className="text-red-400 text-2xl mt-1 flex-shrink-0">⏰</span>
                        <div>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Hours wasted chasing no-shows</h4>
                          <p className="text-white/60 text-sm">Your sales team burning time on unqualified prospects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-red-400/5 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* Promise Panel - Enhanced Design */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="relative p-10 lg:p-12 bg-gradient-to-br from-[#1e1e1e]/90 to-[#1a1a1a]/90 border border-[#efcc8a]/25 rounded-3xl group transition-all duration-500 hover:border-[#efcc8a]/50 hover:shadow-[0_0_40px_rgba(239,204,138,0.2)] backdrop-blur-sm">
                  
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 opacity-[0.06] rounded-3xl" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '150px 150px'
                  }}></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#efcc8a]/40 to-[#cd7f32]/50 rounded-xl flex items-center justify-center text-2xl">
                        ✅
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                        The Promise We Deliver
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
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
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </motion.div>
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
          <div className="w-6 h-6 text-[#efcc8a] animate-bounce">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
