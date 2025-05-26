
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { GridPattern } from "@/components/ui/grid-pattern";
import { AmbientParticles } from "@/components/ui/ambient-particles";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Extended Grid Pattern Background - Covering Entire Section */}
      <GridPattern 
        className="absolute inset-0 opacity-20 stroke-[#efcc8a]/15" 
        strokeDasharray="0" 
        width={40} 
        height={40}
      />
      
      {/* Subdued background texture - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>

      {/* Floating Geometric Elements */}
      <motion.div 
        className="absolute top-20 left-16 w-12 h-12 border border-[#efcc8a]/25 bg-[#efcc8a]/5 backdrop-blur-sm rounded-sm"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-24 right-20 w-8 h-8 bg-gradient-radial from-[#efcc8a]/20 to-transparent rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 h-px w-24 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent shadow-[0_0_8px_rgba(239,204,138,0.4)]"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Premium Container - Exact Match to Early Adopter Section */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        {/* Header Section - Matching Early Adopter Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
          className="w-full border-b border-white/10 py-16 bg-[#171717] relative"
        >
          {/* Texture background for header */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
          
          <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">What Keeps You Up at Night</span>{" "}
                <span className="bronze-gradient-fix px-0 mx-0 py-0 my-0">And How We Solve It</span>
              </h2>
              
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light md:text-base">
                Every solar and roofing executive faces the same challenge: turning expensive leads into profitable conversations.
              </p>
            </div>
            
            {/* Elegant Progress Indicator */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-center gap-4 py-0 my-0">
                <div className="w-24 h-[2px] bg-gradient-to-r from-[#efcc8a] to-[#cd7f32] rounded-full"></div>
                <span className="text-[#efcc8a] text-sm font-medium tracking-wide">Pain → Solution</span>
                <div className="w-8 h-[1px] bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout - Fixed Container to Remove Right Edge Gaps */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Pain Panel - Flat Block Style with Ambient Particles */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="border-b border-white/10 lg:border-r border-white/10 relative"
            >
              {/* Ambient Particles for Problems */}
              <AmbientParticles type="problems" />
              
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular" 
                springOptions={{ stiffness: 140, damping: 25, mass: 0.3 }}
              >
                <div 
                  className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col w-full" 
                  style={{ minHeight: '400px' }}
                >
                  {/* Luxury Background Texture - Same as Early Adopter */}
                  <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}></div>
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 text-red-400">💀</div>
                      <h3 className="text-xl font-bold text-red-400 tracking-tight leading-tight">
                        The Pain You Know Too Well
                      </h3>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 border-l-2 border-red-400/30">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">💸</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Ghost leads that vanish without replying</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Spending thousands on leads that never convert into conversations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 border-l-2 border-red-400/30">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">⚠️</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Ad dollars lost on tire-kick traffic</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Attracting lookers instead of serious buyers ready to invest</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-red-400/5 border-l-2 border-red-400/30">
                        <span className="text-red-400 text-xl mt-1 flex-shrink-0">⏰</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Hours wasted chasing no-shows</h4>
                          <p className="text-white/65 text-sm leading-relaxed font-light">Your sales team burning time on unqualified prospects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Luxury Border Effect - Same as Early Adopter */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-red-400/8 rounded-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-400/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </Magnetic>
            </motion.div>

            {/* Promise Panel - Flat Block Style with Ambient Particles */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="border-b border-white/10 lg:border-r-0 border-r border-white/10 relative"
            >
              {/* Ambient Particles for Solutions */}
              <AmbientParticles type="solutions" />
              
              <Magnetic 
                intensity={0.03} 
                rangeX={80} 
                rangeY={40} 
                actionArea="self" 
                shape="rectangular" 
                springOptions={{ stiffness: 140, damping: 25, mass: 0.3 }}
              >
                <div 
                  className="relative h-full p-8 lg:p-10 bg-[#171717] transition-all duration-500 hover:bg-[#1c1c1c] group flex flex-col w-full" 
                  style={{ minHeight: '400px' }}
                >
                  {/* Luxury Background Texture - Same as Early Adopter */}
                  <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}></div>
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 text-[#efcc8a]">✅</div>
                      <h3 className="text-xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                        The Promise We Deliver
                      </h3>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 border-l-2 border-[#efcc8a]/30">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">🎯</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Only decision-makers hit your calendar</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">AI pre-qualifies every lead for genuine buying intent and budget</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 border-l-2 border-[#efcc8a]/30">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">⚡</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">AI filters out time-wasters automatically</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">Smart qualification process eliminates low-quality prospects</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-[#efcc8a]/5 border-l-2 border-[#efcc8a]/30">
                        <span className="text-[#efcc8a] text-xl mt-1 flex-shrink-0">📅</span>
                        <div>
                          <h4 className="text-base font-semibold text-white/90 mb-2">Strategy calls booked—no follow-up needed</h4>
                          <p className="text-white/70 text-sm leading-relaxed font-light">Seamless booking flow with confirmed appointments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Luxury Border Effect - Same as Early Adopter */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border border-[#efcc8a]/8 rounded-none"></div>
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
