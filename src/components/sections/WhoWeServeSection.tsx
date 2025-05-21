
import React from 'react';
import SectionLayout from '../SectionLayout';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const WhoWeServeSection = () => {
  return (
    <SectionLayout variant="charcoal" id="who-we-serve">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl font-bold text-white text-center">Who We Serve</h2>
        <div className="w-16 h-1 bg-white/20 rounded-full"></div>
        <p className="text-xl text-white/70 text-center max-w-2xl">
          [Description Placeholder]
        </p>
        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 gap-2 mt-4">
          Tell Me About Your Targets <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </SectionLayout>
  );
};

export default WhoWeServeSection;
