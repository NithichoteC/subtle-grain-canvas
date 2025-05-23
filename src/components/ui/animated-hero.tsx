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
  
  return <div className="w-full pt-0">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center py-16 lg:py-24 space-y-12">
          {/* Text bubble - brand name - updated styling and reduced spacing to headline */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="border border-white/15 px-6 rounded-full inline-flex -mb-8 py-1 bg-[#202020]/[0.32]">
            <span className="text-sm font-medium tracking-wider text-white font-roboto">PWC AGENCY</span>
          </motion.div>
          
          {/* Main headline - increased spacing from bubble but decreased to next section */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold px-4 leading-tight font-roboto">
              <span className="text-white">
                <span className="bronze-gradient-fix my-0 px-0 mx-0 text-center py-[6px]">AI</span>
                <span className="mx-1">-</span>
                <span className="inline-block">Powered</span>
                <span> System That </span>
                <span className="bronze-gradient-fix px-[2px] my-0 py-[6px]">Delivers</span> <span className="bronze-gradient-fix overflow-visible">Ready Buyers</span> to Your Calendar
              </span>
            </h1>
          </div>
          
          {/* Combined subheading block - adjusted margin from headline */}
          <div className="space-y-3 mt-10 py-0 my-[61px]">
            {/* Rotating phrase part */}
            <div className="h-14 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl tracking-tighter text-white/80 font-medium font-roboto">
                <span className="inline-block mr-3 text-[#efcc8a]">Skip the</span>
                <AnimatePresence mode="wait">
                  <motion.span key={currentIndex} initial={{
                  y: 20,
                  opacity: 0
                }} animate={{
                  y: 0,
                  opacity: 1
                }} exit={{
                  y: -20,
                  opacity: 0
                }} transition={{
                  duration: 0.5
                }} className="inline-block min-w-[160px]">
                    {rotatingPhrases[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </div>
            
            {/* Static subheading part - kept closer to rotating text */}
            <p className="text-lg md:text-xl leading-tight tracking-tight max-w-2xl text-center mx-auto text-white/60 font-roboto">
              We do the heavy lifting so your calendar fills with serious buyers and zero distractions.
            </p>
          </div>
          
          {/* CTA Button - PERFECTLY CALIBRATED MAGNETIC EFFECT */}
          <div className="flex flex-row gap-3 mt-10 mb-8">
            <Magnetic 
              intensity={0.15} 
              rangeX={35} 
              rangeY={17.5} 
              actionArea="global" 
              shape="elliptical"
              springOptions={{
                stiffness: 150,
                damping: 15,
                mass: 0.3
              }}
            >
              <GradientButton className="gap-3 flex items-center text-base font-roboto px-[5px] my-0 mx-0 py-[12px]">
                <span className="text-white">Schedule Your Free Strategy Call</span>
                <Calendar className="w-4 h-4 text-white flex-shrink-0" />
              </GradientButton>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>;
}

export { Hero };
