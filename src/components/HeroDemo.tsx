
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks with complete grid system */}
      <SideBlockGrids />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="relative min-h-screen">
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
      
      {/* Early Adopter Section */}
      <div className="relative z-10">
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
