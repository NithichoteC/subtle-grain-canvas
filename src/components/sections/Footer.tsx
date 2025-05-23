
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            Custom-engineered AI & sales partnerships—minimal, precise, conversion-optimized.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-[#FFC94D] text-sm transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-[#FFC94D] text-sm transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-[#FFC94D] text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
