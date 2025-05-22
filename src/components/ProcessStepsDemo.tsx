
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function ProcessStepsDemo() {
  return (
    <div className="w-full py-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Capture Step */}
          <div className="border border-white/[0.2] flex flex-col items-center p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            <EvervaultCard text="Capture" />

            <h2 className="text-white mt-4 text-sm font-light text-center">
              Trained meta ads to find high-interest prospects
            </h2>
          </div>

          {/* Qualifying Step */}
          <div className="border border-white/[0.2] flex flex-col items-center p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            <EvervaultCard text="Qualify" />

            <h2 className="text-white mt-4 text-sm font-light text-center">
              AI agent segments every lead into ready, warm, or inertia
            </h2>
          </div>

          {/* Book Step */}
          <div className="border border-white/[0.2] flex flex-col items-center p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            <EvervaultCard text="Book" />

            <h2 className="text-white mt-4 text-sm font-light text-center">
              Only decision-ready buyers land on your calendar
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
