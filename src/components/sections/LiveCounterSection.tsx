
import React from "react";
import { SectionLayout } from "@/components/ui/section-layout";

const LiveCounterSection: React.FC = () => {
  return (
    <SectionLayout variant="dotGrid" id="live-counter" className="py-16">
      {/* Placeholder for Live Counter content */}
      <div className="h-40 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white opacity-20">Live Counter Section</h2>
        </div>
      </div>
    </SectionLayout>
  );
};

export { LiveCounterSection };
