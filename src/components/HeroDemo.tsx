
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import HeroSectionBackground from "@/components/HeroSectionBackground";

function HeroDemo() {
  return (
    <div className="relative overflow-hidden w-full font-roboto">
      {/* Hero Section with 3-column layout */}
      <div className="relative z-10">
        {/* Navbar - full width container */}
        <div className="container max-w-5xl mx-auto relative z-20">
          <NavBarDemo />
        </div>
        
        {/* 3-Column Hero Grid */}
        <div className="grid grid-cols-3 min-h-screen">
          {/* Left Side Block */}
          <div className="bg-[#171717] border-r border-white/10 relative">
            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.12]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />
          </div>
          
          {/* Middle Column - Hero Content */}
          <div className="relative z-20">
            <HeroSectionBackground>
              <Hero />
            </HeroSectionBackground>
          </div>
          
          {/* Right Side Block */}
          <div className="bg-[#171717] border-l border-white/10 relative">
            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.12]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
