
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { Waves } from "@/components/ui/wave-background";

function HeroDemo() {
  return (
    <div className="relative">
      {/* Replace GridLines and BackgroundEdgePaths with Waves */}
      <div className="absolute inset-0 z-0">
        <Waves strokeColor="#ffffff1a" backgroundColor="transparent" pointerSize={0.3} />
      </div>
      
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
