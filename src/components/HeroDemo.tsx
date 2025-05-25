
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
      
      {/* HIGH VISIBILITY GRID SYSTEM - Using bright colors to ensure visibility */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Center the grid container to match content */}
        <div className="flex justify-center h-full">
          <div className="w-full max-w-5xl relative h-full">
            {/* Left border - bright red for visibility */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
            
            {/* Right border - bright red for visibility */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-500" />
            
            {/* Bottom border at hero section bottom - bright yellow for visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" style={{ top: '100vh' }} />
          </div>
        </div>
      </div>
      
      {/* Main content with proper z-index */}
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
      
      {/* Early Adopter Section - seamless transition */}
      <div className="relative z-10">
        <EarlyAdopterSection />
      </div>
    </div>
  );
}

export { HeroDemo };
