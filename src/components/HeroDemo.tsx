
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { UnifiedGridSystem } from "@/components/ui/unified-grid-system";

function HeroDemo() {
  return (
    <>
      {/* Grid system at viewport level - completely independent */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <UnifiedGridSystem />
      </div>
      
      <div className="relative w-full font-roboto">
        {/* Side blocks - absolute positioning within the container */}
        <SideBlockGrids />
        
        {/* Main content with proper z-index */}
        <div className="relative z-10">
          {/* Hero section - restructured for full-width background */}
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
        
        {/* Early Adopter Section - seamless transition */}
        <div className="relative z-10">
          <EarlyAdopterSection />
        </div>
      </div>
    </>
  );
}

export { HeroDemo };
