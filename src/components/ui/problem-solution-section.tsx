
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Larger, more dramatic bronze blobs */}
        <div className="absolute top-1/4 left-16 w-48 h-48 bg-[#efcc8a]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-[#cd7f32]/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-[#ffd700]/7 rounded-full blur-xl"></div>
        {/* Additional visual anchors */}
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-[#efcc8a]/4 rounded-full blur-lg"></div>
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
                <span className="text-white">What Keeps You Up at Night—</span>{" "}
                <span className="bronze-gradient-fix">And How We Solve It</span>
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
              
              <p className="text-2xl md:text-3xl text-white/70 max-w-4xl leading-relaxed font-light" style={{ lineHeight: '1.6' }}>
                Every solar and roofing executive faces the same challenge: turning expensive leads into profitable conversations.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Asymmetric Pain/Promise Panels - 60%/40% split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/10 mb-16">
            {/* Pain Panel - 60% width */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-7 relative p-12 lg:p-16 bg-[#171717] border-r border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a]"
            >
              {/* Enhanced Ghost Icon - more prominent */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center text-3xl opacity-60 shadow-lg">
                👻
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight leading-tight">
                  The Pain You Know Too Well
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-xl text-white/70">
                    <span className="text-red-400 text-lg mt-1">●</span>
                    <span>Ghost leads that vanish without replying</span>
                  </li>
                  <li className="flex items-start gap-4 text-xl text-white/70">
                    <span className="text-red-400 text-lg mt-1">●</span>
                    <span>Ad dollars lost on tire-kick traffic</span>
                  </li>
                  <li className="flex items-start gap-4 text-xl text-white/70">
                    <span className="text-red-400 text-lg mt-1">●</span>
                    <span>Hours wasted chasing no-shows</span>
                  </li>
                </ul>
              </div>
              
              {/* Enhanced hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-400/5 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Promise Panel - 40% width */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-5 relative p-12 lg:p-16 bg-[#1a1a1a] group transition-all duration-500 hover:bg-[#1d1d1d]"
            >
              {/* Enhanced Calendar Checkmark Icon */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                ✓
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold bronze-gradient-fix tracking-tight leading-tight">
                  The Promise We Deliver
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-xl text-white/80">
                    <span className="text-[#efcc8a] text-lg mt-1">●</span>
                    <span>Only decision-makers hit your calendar</span>
                  </li>
                  <li className="flex items-start gap-4 text-xl text-white/80">
                    <span className="text-[#efcc8a] text-lg mt-1">●</span>
                    <span>AI filters out time-wasters</span>
                  </li>
                  <li className="flex items-start gap-4 text-xl text-white/80">
                    <span className="text-[#efcc8a] text-lg mt-1">●</span>
                    <span>Strategy calls booked—no follow-up needed</span>
                  </li>
                </ul>
              </div>
              
              {/* Enhanced hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efcc8a]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#efcc8a]/5 via-transparent to-transparent"></div>
              </div>
            </motion.div>
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
