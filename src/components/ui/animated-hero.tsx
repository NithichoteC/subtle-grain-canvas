
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const rotatingPhrases = [
    "no-shows",
    "tire-kickers",
    "ghost lists",
    "ad waste"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      {/* Grid border - white lines creating a grid effect */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={`v-line-${i}`} className="border-l border-white/10 h-full"></div>
        ))}
        {[...Array(4)].map((_, i) => (
          <div key={`h-line-${i}`} className="border-t border-white/10 w-full absolute" style={{ top: `${(i + 1) * 25}%` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex gap-4 py-16 lg:py-28 items-center justify-center flex-col">
          <div className="flex gap-3 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold px-4 leading-tight">
              <span className="text-white">
                <span className="bronze-gradient-fix">AI</span>-Powered System That <span className="bronze-gradient-fix">Delivers</span> <span className="bronze-gradient-fix overflow-visible">Ready Buyers</span> to Your Calendar
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center mt-3">
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
            <p className="text-lg md:text-xl leading-tight tracking-tight text-muted-foreground max-w-2xl text-center mx-auto text-white/90 mt-3">
              We do the heavy lifting so your calendar fills with serious buyers and zero distractions.
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <Button size="lg" className="gap-4">
              Book My Free Strategy Call <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
