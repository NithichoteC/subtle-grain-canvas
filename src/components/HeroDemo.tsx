
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { zIndex } from "@/lib/design-tokens";

/**
 * Main hero demo component with optimized responsive structure
 * Manages the three-column layout with proper z-index layering and responsive design
 */
function HeroDemo() {
  return (
    <div className="relative w-full min-h-screen font-roboto">
      {/* Side blocks - fixed positioning for seamless coverage */}
      <SideBlockGrids />
      
      {/* Main content layer - responsive container */}
      <div className="relative w-full" style={{ zIndex: zIndex.content }}>
        {/* Hero section container - responsive padding to avoid side blocks */}
        <div className="relative">
          {/* Navigation - responsive container */}
          <div className="w-full px-48 sm:px-56 md:px-64 lg:px-80 xl:px-96">
            <div className="container max-w-5xl mx-auto">
              <NavBarDemo />
            </div>
          </div>
          
          {/* Hero content - responsive container */}
          <div className="w-full px-48 sm:px-56 md:px-64 lg:px-80 xl:px-96">
            <div className="container max-w-5xl mx-auto">
              <HeroSectionBackground>
                <Hero />
              </HeroSectionBackground>
            </div>
          </div>
        </div>
      </div>
      
      {/* Early Adopter Section - responsive container */}
      <div className="relative w-full px-48 sm:px-56 md:px-64 lg:px-80 xl:px-96" style={{ zIndex: zIndex.content }}>
        <div className="container max-w-5xl mx-auto">
          <EarlyAdopterSection />
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
