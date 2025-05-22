
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import { BlockFrame } from "@/components/ui/BlockFrame";
import { BackgroundFlows } from "@/components/ui/background-flows";

function HeroDemo() {
  return (
    <div className="relative">
      {/* Background flows positioned behind the content */}
      <BackgroundFlows />
      
      {/* Content positioned on top of the background flows */}
      <div className="relative z-10">
        <NavBarDemo />
        <div className="container mx-auto px-6 py-8">
          <BlockFrame 
            flowIntensity="medium" 
            flowDirection="both"
            className="mt-8"
          >
            <Hero />
          </BlockFrame>
        </div>
      </div>
    </div>
  );
}

export { HeroDemo };
