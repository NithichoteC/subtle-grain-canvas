
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { zIndex } from "@/lib/design-tokens";

/**
 * Main hero demo component with sticky behavior and seamless layout
 * Manages the three-column layout with zero gaps and sticky scroll behavior
 */
function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks - positioned with proper z-index */}
      <SideBlockGrids />
      
      {/* Main content layer - sticky and perfectly centered */}
      <div className="sticky top-0" style={{ zIndex: zIndex.content }}>
        {/* Hero section container - exact 1280px width to match side blocks */}
        <div className="relative w-full max-w-[1280px] mx-auto">
          {/* Navigation */}
          <div className="w-full">
            <NavBarDemo />
          </div>
          
          {/* Hero content */}
          <div className="w-full">
            <HeroSectionBackground>
              <Hero />
            </HeroSectionBackground>
          </div>
        </div>
      </div>
      
      {/* Early Adopter Section - also sticky */}
      <div className="sticky top-0" style={{ zIndex: zIndex.content }}>
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
