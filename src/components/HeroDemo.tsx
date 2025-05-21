
import { Hero } from "@/components/ui/animated-hero";
import GridLines from "@/components/GridLines";

function HeroDemo() {
  return (
    <div className="relative">
      <GridLines />
      <div className="block px-8 md:px-16 relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export { HeroDemo };
