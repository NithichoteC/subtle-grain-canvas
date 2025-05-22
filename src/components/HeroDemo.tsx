
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import { BlockFrame } from "@/components/ui/BlockFrame";

function HeroDemo() {
  return (
    <div className="relative">
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
