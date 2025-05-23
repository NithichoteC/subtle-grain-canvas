
import React from 'react';
import { Check } from 'lucide-react';

interface TrustItemProps {
  text: string;
}

const TrustItem = ({ text }: TrustItemProps) => {
  return (
    <div className="flex items-start space-x-3 p-4">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-4 w-4 text-[#FFC94D]" />
      </div>
      <span className="text-white/80 text-base">{text}</span>
    </div>
  );
};

export const TrustSection = () => {
  const trustItems = [
    "Data-Backed Decisions",
    "Relentless Iteration",
    "AI-Powered Qualification",
    "Premium Lead Quality",
    "Transparent Reporting",
    "Guaranteed Results"
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#191919]">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Why Teams <span className="bronze-gradient-fix">Trust</span> PWC Agency
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <TrustItem key={index} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
