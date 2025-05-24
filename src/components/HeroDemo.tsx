
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { InteractiveGradientBackground } from "@/components/ui/interactive-gradient-background";
import { EarlyAdopterSection } from "@/components/ui/early-adopter-section";
import { HeroFlowingIcons } from "@/components/ui/hero-flowing-icons";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Hero Section with Interactive Gradient Background */}
      <div className="relative">
        {/* Interactive Gradient Background - deepest layer */}
        <InteractiveGradientBackground className="z-0" />
        
        {/* Flowing Icons Background - subtle layer behind hero content */}
        <div className="absolute inset-0 z-5">
          <HeroFlowingIcons />
        </div>
        
        {/* Grid Lines - clean borders above icons but below content */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          {/* Left vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
          {/* Right vertical line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
        </div>
        
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
      
      {/* Bottom grid line continuation */}
      <div className="absolute left-0 right-0 h-[1px] bg-white/10 z-30" style={{ top: '100%' }}></div>
      
      {/* Early Adopter Section - separate block */}
      <EarlyAdopterSection />
    </div>
  );
}

export { HeroDemo };
