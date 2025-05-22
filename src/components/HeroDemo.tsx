
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { Waves } from "@/components/ui/wave-background";
import { FloatingElements } from "@/components/ui/floating-elements";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full min-h-[90vh]">
      {/* Waves background with asymmetrical density and calm zones */}
      <div className="absolute inset-0 z-10">
        <Waves 
          strokeColor="#ffffff1a" 
          backgroundColor="transparent" 
          pointerSize={0.3}
          className="w-full h-full"
        />
      </div>
      
      {/* Floating elements that activate the negative space */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingElements />
      </div>
      
      {/* Container for content with proper z-index */}
      <div className="relative z-20">
        {/* Navbar */}
        <div className="container max-w-5xl mx-auto">
          <NavBarDemo />
        </div>
        
        {/* Hero section with improved spacing */}
        <div className="container max-w-5xl mx-auto px-4">
          <HeroSectionBackground className="pb-20">
            <Hero />
          </HeroSectionBackground>
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
