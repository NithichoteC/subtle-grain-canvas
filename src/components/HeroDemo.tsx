
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { ProblemSolutionGrid } from "@/components/ui/problem-solution-grid";
import { EnhancedFeatureGrid } from "@/components/ui/enhanced-feature-grid";
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
      
      {/* Early Adopter Section - also scrolls naturally */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        <EarlyAdopterSection />
      </div>
      
      {/* Problem Solution Grid - replaces Code Comparison */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        <ProblemSolutionGrid />
      </div>
      
      {/* Enhanced Feature Grid - replaces basic Feature Highlights */}
      <div className="relative" style={{ zIndex: zIndex.content }}>
        <EnhancedFeatureGrid />
      </div>
    </div>
  );
}

export { HeroDemo };
