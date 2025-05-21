
import { Hero } from "@/components/ui/animated-hero";
import GridLines from "@/components/GridLines";

function HeroDemo() {
  return (
    <div className="relative">
      <GridLines />
      <div className="block py-6 relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export { HeroDemo };
