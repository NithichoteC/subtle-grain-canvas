
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced Layered Background Elements */}
      <div className="absolute inset-0">
        {/* Dramatic bronze wave behind split */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-br from-[#efcc8a]/8 via-transparent to-[#cd7f32]/6 blur-2xl"></div>
        
        {/* Larger floating elements */}
        <motion.div 
          className="absolute top-12 left-16 w-32 h-32 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-3xl flex items-center justify-center text-4xl shadow-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💀
        </motion.div>
        
        <motion.div 
          className="absolute bottom-16 right-20 w-28 h-28 bg-gradient-to-br from-[#ffd700]/35 to-[#efcc8a]/45 rounded-2xl flex items-center justify-center text-3xl shadow-xl"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
        
        {/* Enhanced bronze glow effects */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#efcc8a]/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#cd7f32]/15 rounded-full blur-2xl"></div>
      </div>
      
      {/* Rich background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#171717] to-[#1a1a1a]/80"></div>
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      ></div>
      
      {/* Compact Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/15">
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
              
              {/* Enhanced progress bar with glow */}
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

          {/* Dramatic Split Panels with Visual Divider */}
          <div className="relative pb-12">
            {/* Central dramatic divider */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#efcc8a]/60 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#efcc8a] to-[#cd7f32] rounded-full shadow-lg"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain Panel */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative p-8 lg:p-10 bg-gradient-to-br from-[#1a1a1a] to-[#171717] border border-red-400/20 rounded-2xl group transition-all duration-500 hover:border-red-400/40 hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]"
              >
                {/* Floating skull with enhanced shadow */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-400/30 to-red-500/40 rounded-xl flex items-center justify-center text-2xl shadow-xl">
                  💀
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-red-400 tracking-tight leading-tight">
                    The Pain You Know Too Well
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-lg text-white/80">
                      <span className="text-red-400 text-xl mt-0.5">●</span>
                      <span>Ghost leads that vanish without replying</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/80">
                      <span className="text-red-400 text-xl mt-0.5">●</span>
                      <span>Ad dollars lost on tire-kick traffic</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/80">
                      <span className="text-red-400 text-xl mt-0.5">●</span>
                      <span>Hours wasted chasing no-shows</span>
                    </li>
                  </ul>
                </div>
                
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-400/8 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Promise Panel */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative p-8 lg:p-10 bg-gradient-to-br from-[#1c1c1c] to-[#1a1a1a] border border-[#efcc8a]/30 rounded-2xl group transition-all duration-500 hover:border-[#efcc8a]/50 hover:shadow-[0_0_30px_rgba(239,204,138,0.2)]"
              >
                {/* Floating checkmark with glow */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#efcc8a]/40 to-[#cd7f32]/50 rounded-xl flex items-center justify-center text-2xl shadow-xl">
                  ✅
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                    The Promise We Deliver
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-lg text-white/85">
                      <span className="text-[#efcc8a] text-xl mt-0.5">●</span>
                      <span>Only decision-makers hit your calendar</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/85">
                      <span className="text-[#efcc8a] text-xl mt-0.5">●</span>
                      <span>AI filters out time-wasters</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/85">
                      <span className="text-[#efcc8a] text-xl mt-0.5">●</span>
                      <span>Strategy calls booked—no follow-up needed</span>
                    </li>
                  </ul>
                </div>
                
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/8 via-transparent to-transparent rounded-2xl"></div>
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
          <div className="w-6 h-6 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
