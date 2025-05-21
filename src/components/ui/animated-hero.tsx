
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Skip the no-shows",
    "Skip the tire-kickers",
    "Skip the ghost lists",
    "Skip the endless research",
    "Skip the ad waste"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
              <span className="text-white">AI-Driven Booking Engine That Fills Your Calendar With Ready Buyers</span>
            </h1>
            <h2 className="text-3xl md:text-4xl tracking-tighter text-center text-white/80 font-medium h-12 flex items-center justify-center">
              <span className="inline-block w-64 text-center transition-opacity duration-500">
                {phrases[currentPhraseIndex]}
              </span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white/90 mt-4">
              Human‑guided AI captures, qualifies & books high‑intent roofing + solar appointments—while you stay in control.
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
