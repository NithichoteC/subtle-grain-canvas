
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
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Stylized Handshake 2.5D with Bronze Aura */}
        <motion.div 
          className="absolute top-12 left-16 w-16 h-16 bg-gradient-to-br from-[#efcc8a]/30 to-[#cd7f32]/40 rounded-xl flex items-center justify-center text-2xl shadow-lg"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🤝
        </motion.div>
        
        {/* Bronze aura around handshake */}
        <motion.div 
          className="absolute top-8 left-12 w-24 h-24 bg-[#efcc8a]/8 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Soft bronze light spots */}
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-[#cd7f32]/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#ffd700]/8 rounded-full blur-lg"></div>
      </div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.06]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Premium Container */}
      <div className="w-full relative z-10 border-l border-r border-white/10">
        <div className="w-full max-w-5xl mx-auto py-24 px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-12"
          >
            {/* Main CTA Copy */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
                <span className="text-white">Ready to fill your calendar with</span>{" "}
                <span className="bronze-gradient-fix">decision-makers?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                Book your free strategy call today and discover how our AI system can transform your lead generation.
              </p>
            </div>
            
            {/* CTA Button with Heartbeat Glow */}
            <div className="space-y-8">
              <Magnetic 
                intensity={0.15} 
                rangeX={200} 
                rangeY={80} 
                actionArea="global" 
                shape="elliptical"
                springOptions={{ stiffness: 80, damping: 15, mass: 0.6 }}
              >
                <motion.div
                  className="relative"
                  onHoverStart={() => setCurrentMicrocopy((prev) => (prev + 1) % microcopyVariants.length)}
                >
                  {/* Diagonal Shimmer Animation on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      transform: "skewX(-20deg) translateX(-100%)"
                    }}
                    whileHover={{
                      transform: "skewX(-20deg) translateX(200%)",
                      transition: { duration: 2, ease: "easeOut" }
                    }}
                  />
                  
                  {/* Heartbeat Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/20 via-[#cd7f32]/30 to-[#efcc8a]/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <GradientButton className="relative gap-3 flex items-center text-lg font-roboto py-4 px-8 group">
                    <span className="text-white whitespace-nowrap">Schedule Your Free Strategy Call</span>
                    <Calendar className="w-5 h-5 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </GradientButton>
                </motion.div>
              </Magnetic>
              
              {/* Rotating Microcopy Variants */}
              <motion.div 
                className="space-y-3"
                key={currentMicrocopy}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#efcc8a] text-sm uppercase tracking-[0.2em] font-medium">
                  {microcopyVariants[currentMicrocopy]}
                </p>
                
                <div className="flex items-center justify-center gap-4 text-xs text-white/40">
                  <span>✓ No commitment required</span>
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  <span>✓ 30-minute consultation</span>
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  <span>✓ Custom strategy included</span>
                </div>
              </motion.div>
            </div>
            
            {/* Trust Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center space-y-4 pt-8 border-t border-white/5"
            >
              <div className="flex items-center gap-6 text-xs text-white/30 uppercase tracking-[0.15em]">
                <span>🔒 Enterprise Security</span>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <span>⚡ 48-Hour Setup</span>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <span>🎯 Guaranteed Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
