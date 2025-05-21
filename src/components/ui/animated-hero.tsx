
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
              <span className="text-white">
                <span className="bronze-gradient">AI</span>-Powered System That <span className="bronze-gradient">Delivers</span> <span className="bronze-gradient">Ready Buyers</span> to Your Calendar
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center mt-4">
              <h2 className="text-3xl md:text-4xl tracking-tighter text-white/80 font-medium flex items-center">
                <span className="inline-block whitespace-nowrap">Skip the</span>
                <span className="relative inline-block w-[150px] ml-3 text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 inline-block"
                    >
                      {rotatingPhrases[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white/90 mt-4">
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
