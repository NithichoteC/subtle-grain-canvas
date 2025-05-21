
import { Hero } from "@/components/ui/animated-hero";
import GridLines from "@/components/GridLines";
import { NavBarDemo } from "@/components/NavBarDemo";

function HeroDemo() {
  return (
    <div className="relative">
      <GridLines />
      <div className="px-8 md:px-16 relative z-10">
        <NavBarDemo />
        <div className="py-12">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
