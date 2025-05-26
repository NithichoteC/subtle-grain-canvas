
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar } from "lucide-react";
import { useState } from "react";

export function FinalCtaSection() {
  const [currentMicrocopy, setCurrentMicrocopy] = useState(0);
  
  const microcopyVariants = [
    "Get Started Today",
    "Book Your Free Consultation", 
    "Unlock Your Growth"
  ];

  return (
    <div className="w-full relative font-roboto bg-[#1a1a1a] overflow-hidden">
      {/* Enhanced Dramatic Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced Stylized Handshake with Bronze Aura */}
        <motion.div 
          className="absolute top-20 left-20 w-28 h-28 bg-gradient-to-br from-[#efcc8a]/40 to-[#cd7f32]/50 rounded-3xl flex items-center justify-center text-4xl shadow-2xl"
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
          🤝
        </motion.div>
        
        {/* Enhanced bronze aura around handshake */}
        <motion.div 
          className="absolute top-16 left-16 w-36 h-36 bg-[#efcc8a]/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Dynamic calendar element */}
        <motion.div 
          className="absolute bottom-24 right-24 w-24 h-24 bg-gradient-to-br from-[#ffd700]/40 to-[#efcc8a]/50 rounded-2xl flex items-center justify-center text-3xl shadow-xl"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -8, 8, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📅
        </motion.div>
        
        {/* Enhanced bronze light spots */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#cd7f32]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-[#ffd700]/12 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-[#efcc8a]/8 rounded-full blur-lg"></div>
      </div>
      
      {/* Rich background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/80 via-[#1a1a1a] to-[#1c1c1c]/80"></div>
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      ></div>
      
      {/* Compact Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/15">
        <div className="w-full max-w-[1400px] mx-auto py-20 lg:py-28 px-[6%]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-12"
          >
            {/* Enhanced Main CTA Copy */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] max-w-4xl mx-auto">
                <span className="text-white">Ready to fill your calendar with</span>{" "}
                <span className="bronze-gradient-fix">decision-makers?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light">
                Book your free strategy call today and discover how our AI system can transform your lead generation.
              </p>
            </div>
            
            {/* Enhanced CTA Button with Dramatic Effects */}
            <div className="space-y-8">
              <Magnetic 
                intensity={0.2} 
                rangeX={200} 
                rangeY={80} 
                actionArea="global" 
                shape="elliptical"
                springOptions={{ stiffness: 100, damping: 20, mass: 0.5 }}
              >
                <motion.div
                  className="relative"
                  onHoverStart={() => setCurrentMicrocopy((prev) => (prev + 1) % microcopyVariants.length)}
                >
                  {/* Enhanced Dramatic Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/30 via-[#cd7f32]/40 to-[#efcc8a]/30 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Enhanced Diagonal Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-full"
                    style={{ transform: "skewX(-20deg) translateX(-100%)" }}
                    whileHover={{
                      transform: "skewX(-20deg) translateX(200%)",
                      transition: { duration: 1.5, ease: "easeOut" }
                    }}
                  />
                  
                  <GradientButton className="relative gap-3 flex items-center text-lg font-roboto py-4 px-8 group">
                    <span className="text-white whitespace-nowrap">Schedule Your Free Strategy Call</span>
                    <Calendar className="w-5 h-5 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </GradientButton>
                </motion.div>
              </Magnetic>
              
              {/* Enhanced Rotating Microcopy */}
              <motion.div 
                className="space-y-6"
                key={currentMicrocopy}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#efcc8a] text-sm uppercase tracking-[0.25em] font-medium">
                  {microcopyVariants[currentMicrocopy]}
                </p>
                
                <div className="flex items-center justify-center gap-8 text-sm text-white/50">
                  <span>✓ No commitment required</span>
                  <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                  <span>✓ 30-minute consultation</span>
                  <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                  <span>✓ Custom strategy included</span>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Trust Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-6 pt-8 border-t border-white/15"
            >
              <div className="flex items-center gap-8 text-xs text-white/40 uppercase tracking-[0.2em]">
                <span>🔒 Enterprise Security</span>
                <div className="w-1 h-1 bg-white/25 rounded-full"></div>
                <span>⚡ 48-Hour Setup</span>
                <div className="w-1 h-1 bg-white/25 rounded-full"></div>
                <span>🎯 Guaranteed Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
