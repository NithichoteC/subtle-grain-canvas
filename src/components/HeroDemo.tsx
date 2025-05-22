
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { Waves } from "@/components/ui/wave-background";

function HeroDemo() {
  return (
    <div className="relative">
      {/* Waves background with lowest z-index, positioned behind everything */}
      <div className="absolute inset-0 z-0">
        <Waves strokeColor="#ffffff1a" backgroundColor="transparent" pointerSize={0.3} />
      </div>
      
      {/* Main content container with higher z-index */}
      <div className="relative z-10">
        {/* Navbar with same background as hero section */}
        <div className="container max-w-5xl mx-auto">
          <div className="bg-dark border-b border-l border-r border-white/10">
            <NavBarDemo />
          </div>
        </div>
        
        {/* Hero section */}
        <div className="container max-w-5xl mx-auto">
          <HeroSectionBackground>
            <Hero />
          </HeroSectionBackground>
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
