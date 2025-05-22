
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { GradientButton } from "@/components/ui/gradient-button";

function Hero() {
  const rotatingPhrases = ["no-shows", "tire-kickers", "ghost lists", "ad waste"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-0">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center py-10 lg:py-16 space-y-12">
          {/* Text bubble - brand name */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-1 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2 rounded-full inline-flex"
          >
            <span className="text-sm font-medium tracking-wider text-white/90">PWC AGENCY</span>
          </motion.div>
          
          <div className="flex flex-col space-y-10">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold px-4 leading-tight">
              <span className="text-white">
                <span className="bronze-gradient-fix">AI</span>-Powered System That <span className="bronze-gradient-fix">Delivers</span> <span className="bronze-gradient-fix overflow-visible">Ready Buyers</span> to Your Calendar
              </span>
            </h1>
            
            <div className="h-14 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl tracking-tighter text-white/80 font-medium">
                <span className="inline-block mr-3">Skip the</span>
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
            
            <p className="text-lg md:text-xl leading-tight tracking-tight max-w-2xl text-center mx-auto text-white/60">
              We do the heavy lifting so your calendar fills with serious buyers and zero distractions.
            </p>
          </div>
          
          <div className="flex flex-row gap-3 mt-8">
            <Magnetic 
              intensity={0.25} 
              rangeX={100} 
              rangeY={80} 
              actionArea="parent" 
              shape="elliptical" 
              springOptions={{
                stiffness: 14,
                damping: 9,
                mass: 0.6
              }}
            >
              <GradientButton className="py-3 px-8 gap-3 flex items-center text-base">
                <span className="text-white">Schedule Your Free Strategy Call</span>
                <Calendar className="w-4 h-4 text-white flex-shrink-0" />
              </GradientButton>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
