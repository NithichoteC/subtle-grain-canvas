
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <div className="w-full relative font-roboto bg-[#171717] overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Soft bronze blobs behind panels */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#efcc8a]/4 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-16 w-24 h-24 bg-[#cd7f32]/6 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#ffd700]/5 rounded-full blur-lg"></div>
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
                <span className="text-white">What Keeps You Up at Night—</span>{" "}
                <span className="bronze-gradient-fix">And How We Solve It</span>
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
              
              <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light" style={{ lineHeight: '1.5' }}>
                Every solar and roofing executive faces the same challenge: turning expensive leads into profitable conversations.
              </p>
            </div>
          </motion.div>

          {/* Asymmetric Pain/Promise Panels - 60%/40% split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/10">
            {/* Pain Panel - 60% width */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-7 relative p-8 lg:p-12 bg-[#171717] border-r border-white/10 group transition-all duration-500 hover:bg-[#1a1a1a]"
            >
              {/* Ghost Icon Placeholder - top right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center text-xl opacity-60">
                👻
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white/90 tracking-tight">
                  The Pain You Know Too Well
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="text-red-400 text-sm mt-1">●</span>
                    <span>Ghost leads that vanish without replying</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="text-red-400 text-sm mt-1">●</span>
                    <span>Ad dollars lost on tire-kick traffic</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="text-red-400 text-sm mt-1">●</span>
                    <span>Hours wasted chasing no-shows</span>
                  </li>
                </ul>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Promise Panel - 40% width */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-5 relative p-8 lg:p-12 bg-[#1a1a1a] group transition-all duration-500 hover:bg-[#1d1d1d]"
            >
              {/* Calendar Checkmark Icon Placeholder - top right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#efcc8a]/20 to-[#cd7f32]/30 rounded-lg flex items-center justify-center text-xl">
                ✓
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bronze-gradient-fix tracking-tight">
                  The Promise We Deliver
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#efcc8a] text-sm mt-1">●</span>
                    <span>Only decision-makers hit your calendar</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#efcc8a] text-sm mt-1">●</span>
                    <span>AI filters out time-wasters</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#efcc8a] text-sm mt-1">●</span>
                    <span>Strategy calls booked—no follow-up needed</span>
                  </li>
                </ul>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efcc8a]/40 to-transparent"></div>
              </div>
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
          <div className="w-4 h-4 text-[#efcc8a]">
            <ArrowDown className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
