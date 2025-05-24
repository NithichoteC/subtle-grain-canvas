
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Selectable Side Block Grids - positioned behind everything */}
      <SideBlockGrids />
      
      {/* Hero Section with Clean Background */}
      <div className="relative z-10">
        {/* Container for hero content with highest z-index */}
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
        </div>
      </div>
      
      {/* Early Adopter Section - separate block */}
      <EarlyAdopterSection />
    </div>
  );
}

export { HeroDemo };
