
import { Hero } from "@/components/ui/animated-hero";
import GridLines from "@/components/GridLines";
import { NavBarDemo } from "@/components/NavBarDemo";
import { BackgroundEdgePaths } from "@/components/ui/background-paths";
import HeroSectionBackground from "@/components/HeroSectionBackground";

function HeroDemo() {
  return (
    <div className="relative">
      <GridLines />
      <BackgroundEdgePaths />
      <div className="container max-w-5xl mx-auto relative z-10">
        <NavBarDemo />
        <HeroSectionBackground>
          <Hero />
        </HeroSectionBackground>
      </div>
    </div>
  );
}

export { HeroDemo };
