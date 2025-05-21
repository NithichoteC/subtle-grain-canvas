
import React from "react";
import { Hero } from "@/components/ui/animated-hero";
import { GridLines } from "@/components/ui/grid-lines";

function HeroDemo() {
  return (
    <div className="relative block border-white/10 border-t border-b">
      <GridLines />
      <Hero />
    </div>
  );
}

export { HeroDemo };
