
import React from "react";
import { SectionLayout } from "@/components/ui/section-layout";

const FAQSection: React.FC = () => {
  return (
    <SectionLayout variant="graphite" id="faq" className="py-20">
      {/* Placeholder for FAQ content */}
      <div className="h-64 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white opacity-20">FAQ Section</h2>
        </div>
      </div>
    </SectionLayout>
  );
};

export { FAQSection };
