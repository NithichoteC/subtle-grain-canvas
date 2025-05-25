
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { SideBlockGrids } from "@/components/ui/side-block-grids";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative w-full font-roboto">
      {/* Side blocks - absolute positioning within the container */}
      <SideBlockGrids />
      
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="relative min-h-screen">
          <HeroSectionBackground>
            <div className="relative">
              {/* Content-aligned grid system */}
              <div className="absolute inset-0 pointer-events-none z-50">
                <div className="container max-w-5xl mx-auto h-full relative">
                  {/* Left border - aligned with content */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />
                  
                  {/* Right border - aligned with content */}
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />
                  
                  {/* Bottom border - spans content width only */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
                </div>
              </div>
              
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
      
      {/* Early Adopter Section - seamless transition */}
      <div className="relative z-10">
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
