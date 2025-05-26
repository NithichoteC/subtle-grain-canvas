
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { TrustBar } from "@/components/ui/trust-bar";
import { zIndex } from "@/lib/design-tokens";

/**
 * Main hero demo component with natural scrolling behavior
 * Manages the three-column layout with zero gaps and natural scroll behavior
 */
function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks - positioned with proper z-index, scrolls with page */}
      <SideBlockGrids />
      
      {/* Main content layer - scrolls naturally with page */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
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
      
      {/* Trust Bar - full width below hero section */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        <TrustBar />
      </div>
    </div>
  );
}

export { HeroDemo };
