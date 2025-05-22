
import { Hero } from "@/components/ui/animated-hero";
import GridLines from "@/components/GridLines";
import { NavBarDemo } from "@/components/NavBarDemo";
import { BackgroundEdgePaths } from "@/components/ui/background-paths";
import { HorizontalFlows } from "@/components/ui/HorizontalFlows";

function HeroDemo() {
  return (
    <div className="relative">
      <GridLines />
      <BackgroundEdgePaths />
      <HorizontalFlows /> {/* Add our new horizontal flows component */}
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
