
import { Calendar, Shield, Users, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";
import { animations } from "@/lib/design-tokens";

/**
 * Main hero section with animated text rotation and CTAs
 * Uses design tokens for consistent timing and animations
 */
function Hero() {
  const rotatingPhrases = ["no-shows", "tire-kickers", "ghost lists", "ad waste"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingPhrases.length);
    }, animations.textRotation);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-0 relative">
      {/* Grid Lines - Left and Right */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left vertical grid line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
        
        {/* Right vertical grid line */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
        
        {/* Center vertical grid line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform -translate-x-1/2"></div>
      </div>

      <div className="w-full">
        <div className="flex flex-col items-center justify-center py-16 lg:py-24 space-y-12">
          {/* Brand bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: animations.entrance.duration }}
            className="border border-white/15 px-6 rounded-full inline-flex -mb-8 py-1 bg-[#202020]/[0.32]"
          >
            <span className="text-sm font-medium tracking-wider text-white font-roboto">PWC AGENCY</span>
          </motion.div>
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold px-4 leading-tight font-roboto">
              <span className="text-white">
                <span className="bronze-gradient-fix my-0 px-0 mx-0 text-center py-[6px]">AI</span>
                <span className="mx-1">-</span>
                <span className="inline-block">Powered</span>
                <span> System That </span>
                <span className="bronze-gradient-fix px-[2px] my-0 py-[6px]">Delivers</span>{" "}
                <span className="bronze-gradient-fix overflow-visible">Ready Buyers</span> to Your Calendar
              </span>
            </h1>
          </div>
          
          {/* Animated subheading */}
          <div className="space-y-3 mt-10 py-0 my-[61px]">
            <div className="h-14 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl tracking-tighter text-white/80 font-medium font-roboto">
                <span className="inline-block mr-3 text-[#efcc8a]">Skip the</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block min-w-[160px]"
                  >
                    {rotatingPhrases[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </div>
            
            <p className="text-lg leading-tight tracking-tight max-w-2xl text-center mx-auto text-white/60 font-roboto md:text-lg">
              Focus on closing deals by vetting every lead so you only connect with decision-makers.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6 mt-10 mb-8">
            <Magnetic 
              intensity={0.1} 
              rangeX={150} 
              rangeY={60} 
              actionArea="global" 
              shape="elliptical"
              springOptions={{ stiffness: 100, damping: 20, mass: 0.5 }}
            >
              <GradientButton className="gap-2 flex items-center text-base font-roboto py-[12px]">
                <span className="text-white whitespace-nowrap">Schedule Your Free Strategy Call</span>
                <Calendar className="w-4 h-4 text-white flex-shrink-0" />
              </GradientButton>
            </Magnetic>
            
            {/* Trust signals */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: animations.entrance.duration + 0.1, 
                delay: animations.entrance.delay 
              }}
              className="flex flex-col items-center space-y-3 max-w-lg mx-auto"
            >
              {/* Trust icons row */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#efcc8a]/70" />
                  <span className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium">SOC 2- Aligned</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#efcc8a]/70" />
                  <span className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium">GDPR-quality</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#efcc8a]/70" />
                  <span className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium">ENTERPRISE</span>
                </div>
              </div>
              
              <p className="text-sm text-white/50 text-center leading-relaxed font-light tracking-tight max-w-md">
                Built on industry-standard security controls, aligned with SOC 2 and EU privacy best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
