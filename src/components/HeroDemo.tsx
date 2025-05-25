
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <>
      {/* Side blocks - render FIRST at the highest z-index */}
      <SideBlockGrids />
      
      <div className="relative w-full font-roboto">
        {/* Main content with lower z-index */}
        <div className="relative z-10">
          {/* Hero section - clean container without extra spacing */}
          <div className="relative">
            {/* Navbar */}
            <div className="container max-w-5xl mx-auto">
              <NavBarDemo />
            </div>
            
            {/* Hero content - removed extra padding */}
            <div className="container max-w-5xl mx-auto">
              <HeroSectionBackground>
                <Hero />
              </HeroSectionBackground>
            </div>
          </div>
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
