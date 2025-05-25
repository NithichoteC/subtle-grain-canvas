
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Hero Section with proper layout */}
      <div className="relative min-h-screen">
        {/* Side blocks that scroll with content */}
        <SideBlockGrids className="absolute inset-0 z-0" />
        
        {/* Content container with proper z-index */}
        <div className="relative z-10">
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
        </div>
      </div>
      
      {/* Early Adopter Section - separate scrollable block */}
      <EarlyAdopterSection />
    </div>
  );
}

export { HeroDemo };
