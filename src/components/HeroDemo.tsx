
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { Waves } from "@/components/ui/wave-background";

function HeroDemo() {
  return (
    <div className="relative">
      {/* Navbar with its own background */}
      <div className="container max-w-5xl mx-auto relative z-20">
        <NavBarDemo />
      </div>
      
      {/* Hero section with wave background */}
      <div className="relative">
        {/* Waves background with lower z-index */}
        <div className="absolute inset-0 z-10">
          <Waves strokeColor="#ffffff1a" backgroundColor="transparent" pointerSize={0.3} />
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-20">
          <HeroSectionBackground>
            <Hero />
          </HeroSectionBackground>
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
