
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { NeuralNetworkBackground } from "@/components/ui/neural-network-background";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Hero Section with Neural Network Background */}
      <div className="relative">
        {/* Neural Network Background - covers strategic areas */}
        <NeuralNetworkBackground className="z-10" />
        
        {/* Grid Lines - improved connection system */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Left vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
          {/* Right vertical line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
          {/* Bottom horizontal lines - extended to connect properly */}
          <div className="absolute left-0 bottom-0 w-1/3 h-[1px] bg-white/10"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-[1px] bg-white/10"></div>
          {/* Corner connection dots */}
          <div className="absolute left-0 bottom-0 w-1 h-1 bg-[#efcc8a]/60 rounded-full transform -translate-x-0.5 translate-y-0.5"></div>
          <div className="absolute right-0 bottom-0 w-1 h-1 bg-[#efcc8a]/60 rounded-full transform translate-x-0.5 translate-y-0.5"></div>
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
