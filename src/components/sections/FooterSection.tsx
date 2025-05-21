
import React from "react";
import { SectionLayout } from "@/components/ui/section-layout";

const FooterSection: React.FC = () => {
  return (
    <SectionLayout variant="default" id="footer" className="py-12">
      {/* Placeholder for Footer content */}
      <div className="h-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-white/50">Footer Section</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export { FooterSection };
