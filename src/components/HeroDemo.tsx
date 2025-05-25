
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks - absolute positioning within the container */}
      <SideBlockGrids />
      
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        {/* Hero section with integrated grid borders */}
        <div className="relative">
          {/* Grid borders positioned relative to hero section */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            
            {/* Right vertical line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
            
            {/* Bottom horizontal line - spans full width at bottom of hero */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
            
            {/* Inner content area markers */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full max-w-5xl relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
              </div>
            </div>
          </div>
          
          <HeroSectionBackground>
            <div className="relative">
              {/* Navbar */}
              <div className="container max-w-5xl mx-auto">
                <NavBarDemo />
              </div>
              
              {/* Hero content */}
              <div className="container max-w-5xl mx-auto">
                <Hero />
              </div>
            </div>
          </HeroSectionBackground>
        </div>
      </div>
      
      {/* Early Adopter Section - seamless transition */}
      <div className="relative z-10">
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
