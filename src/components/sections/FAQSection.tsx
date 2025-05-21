
import React from 'react';
import SectionLayout from '../SectionLayout';
import { Separator } from "@/components/ui/separator";

const FAQSection = () => {
  return (
    <SectionLayout variant="graphite" id="faq">
      <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">FAQ</h2>
        <div className="w-full space-y-6">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="w-full">
              <button className="flex w-full justify-between py-4 text-left text-xl font-medium text-white">
                <span>FAQ Question {i + 1}</span>
                <span>+</span>
              </button>
              <Separator className="bg-white/10" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-white/60 hover:text-white transition-colors">
          More questions? <a href="#" className="underline">Contact us</a> →
        </div>
      </div>
    </SectionLayout>
  );
};

export default FAQSection;
