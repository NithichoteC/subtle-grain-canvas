
import { Hero } from "@/components/ui/animated-hero";
import { NavBarDemo } from "@/components/NavBarDemo";
import { BackgroundEdgePaths } from "@/components/ui/background-paths";
import HeroSectionBackground from "@/components/HeroSectionBackground";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

function HeroDemo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={0.5}
          containerClassName="bg-dark"
          colors={[
            [70, 70, 80], // Dark blue/gray
            [30, 30, 40]  // Even darker blue/gray
          ]}
          opacities={[0.15, 0.15, 0.15, 0.25, 0.25, 0.25, 0.4, 0.4, 0.4, 0.5]}
          dotSize={2}
          showGradient={false}
        />
      </div>
      <BackgroundEdgePaths />
      <div className="container max-w-5xl mx-auto relative z-10">
        <NavBarDemo />
        <HeroSectionBackground>
          <Hero />
        </HeroSectionBackground>
      </div>
    </div>
  );
}

export { HeroDemo };
