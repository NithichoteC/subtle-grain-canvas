
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { Waves } from "@/components/ui/wave-background";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Waves background covers the full width and height of the hero section */}
      <div className="absolute inset-0 z-10">
        <Waves 
          strokeColor="#ffffff1a" 
          backgroundColor="transparent" 
          pointerSize={0.3}
          className="w-full h-full"
        />
      </div>
      
      {/* Container for content with proper z-index */}
      <div className="relative z-20">
        {/* Navbar */}
        <div className="container max-w-5xl mx-auto">
          <NavBarDemo />
        </div>
        
        {/* Hero section */}
        <div className="container max-w-5xl mx-auto">
          <HeroSectionBackground>
            <Hero />
          </HeroSectionBackground>
        </div>
        
        {/* Early Adopter Section */}
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
