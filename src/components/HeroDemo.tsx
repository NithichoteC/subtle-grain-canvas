
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { zIndex } from "@/lib/design-tokens";

/**
 * Main hero demo component with optimized structure
 * Manages the three-column layout with proper z-index layering
 */
function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks - positioned with proper z-index */}
      <SideBlockGrids />
      
      {/* Main content layer */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        {/* Hero section container */}
        <div className="relative">
          {/* Navigation */}
          <div className="container max-w-5xl mx-auto">
            <NavBarDemo />
          </div>
          
          {/* Hero content */}
          <div className="container max-w-5xl mx-auto">
            <HeroSectionBackground>
              <Hero />
            </HeroSectionBackground>
          </div>
        </div>
      </div>
      
      {/* Early Adopter Section */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
