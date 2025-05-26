
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
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced Stylized Handshake 2.5D with Bronze Aura */}
        <motion.div 
          className="absolute top-16 left-20 w-20 h-20 bg-gradient-to-br from-[#efcc8a]/35 to-[#cd7f32]/45 rounded-2xl flex items-center justify-center text-3xl shadow-2xl"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🤝
        </motion.div>
        
        {/* Enhanced bronze aura around handshake */}
        <motion.div 
          className="absolute top-12 left-16 w-28 h-28 bg-[#efcc8a]/12 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced bronze light spots */}
        <div className="absolute top-1/4 right-24 w-40 h-40 bg-[#cd7f32]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#ffd700]/10 rounded-full blur-2xl"></div>
        {/* Additional visual anchors */}
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-[#efcc8a]/6 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-[#cd7f32]/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Enhanced background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/60 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.10]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Expanded Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="w-full max-w-[1400px] mx-auto py-32 lg:py-40 px-[6%]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-16"
          >
            {/* Enhanced Main CTA Copy */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl mx-auto" style={{ lineHeight: '1.3' }}>
                <span className="text-white">Ready to fill your calendar with</span>{" "}
                <span className="bronze-gradient-fix">decision-makers?</span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light" style={{ lineHeight: '1.6' }}>
                Book your free strategy call today and discover how our AI system can transform your lead generation.
              </p>
            </div>
            
            {/* Enhanced CTA Button with Heartbeat Glow */}
            <div className="space-y-12">
              <Magnetic 
                intensity={0.18} 
                rangeX={250} 
                rangeY={100} 
                actionArea="global" 
                shape="elliptical"
                springOptions={{ stiffness: 80, damping: 15, mass: 0.6 }}
              >
                <motion.div
                  className="relative"
                  onHoverStart={() => setCurrentMicrocopy((prev) => (prev + 1) % microcopyVariants.length)}
                >
                  {/* Enhanced Diagonal Shimmer Animation on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      transform: "skewX(-20deg) translateX(-100%)"
                    }}
                    whileHover={{
                      transform: "skewX(-20deg) translateX(200%)",
                      transition: { duration: 2, ease: "easeOut" }
                    }}
                  />
                  
                  {/* Enhanced Heartbeat Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/25 via-[#cd7f32]/35 to-[#efcc8a]/25 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <GradientButton className="relative gap-4 flex items-center text-xl font-roboto py-5 px-10 group">
                    <span className="text-white whitespace-nowrap">Schedule Your Free Strategy Call</span>
                    <Calendar className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </GradientButton>
                </motion.div>
              </Magnetic>
              
              {/* Enhanced Rotating Microcopy Variants */}
              <motion.div 
                className="space-y-4"
                key={currentMicrocopy}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#efcc8a] text-base uppercase tracking-[0.2em] font-medium">
                  {microcopyVariants[currentMicrocopy]}
                </p>
                
                <div className="flex items-center justify-center gap-6 text-sm text-white/40">
                  <span>✓ No commitment required</span>
                  <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                  <span>✓ 30-minute consultation</span>
                  <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                  <span>✓ Custom strategy included</span>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced Trust Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-6 pt-12 border-t border-white/10"
            >
              <div className="flex items-center gap-8 text-sm text-white/30 uppercase tracking-[0.15em]">
                <span>🔒 Enterprise Security</span>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <span>⚡ 48-Hour Setup</span>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <span>🎯 Guaranteed Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
