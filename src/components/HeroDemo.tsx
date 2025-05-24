
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { AssetBasedBackground } from "@/components/ui/asset-based-background";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Hero Section with Asset-Based Background */}
      <div className="relative">
        {/* Asset-Based Background - covers only the sides */}
        <AssetBasedBackground className="z-10" />
        
        {/* Fixed Grid Lines - clean borders with better opacity */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Left vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>
          {/* Right vertical line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>
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
      
      {/* Bottom grid line - single continuous line */}
      <div className="absolute left-0 right-0 h-[1px] bg-gray-600 z-30" style={{ top: '100%' }}></div>
      
      {/* Early Adopter Section - separate block */}
      <EarlyAdopterSection />
    </div>
  );
}

export { HeroDemo };
