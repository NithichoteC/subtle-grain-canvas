
import React from "react";
import { SectionLayout } from "@/components/ui/section-layout";

const WhoWeServeSection: React.FC = () => {
  return (
    <SectionLayout variant="charcoal" id="who" className="py-20">
      {/* Placeholder for Who We Serve content */}
      <div className="h-64 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white opacity-20">Who We Serve Section</h2>
        </div>
      </div>
    </SectionLayout>
  );
};

export { WhoWeServeSection };
