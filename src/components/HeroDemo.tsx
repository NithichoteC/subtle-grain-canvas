
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { GeometricEnergyGrid } from "@/components/ui/geometric-energy-grid";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Hero Section with Geometric Energy Grid Background */}
      <div className="relative">
        {/* Geometric Energy Grid Background */}
        <GeometricEnergyGrid className="z-10" />
        
        {/* Fixed Grid Lines - proper opacity and continuous lines */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Left vertical line - full opacity */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>
          {/* Right vertical line - full opacity */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>
          {/* Bottom horizontal line - continuous across full width */}
          <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gray-600"></div>
          {/* Corner connection dots - enhanced visibility */}
          <div className="absolute left-0 bottom-0 w-1.5 h-1.5 bg-[#efcc8a] rounded-full transform -translate-x-0.5 translate-y-0.5"></div>
          <div className="absolute right-0 bottom-0 w-1.5 h-1.5 bg-[#efcc8a] rounded-full transform translate-x-0.5 translate-y-0.5"></div>
        </div>
        
        {/* Container for hero content with proper z-index */}
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
