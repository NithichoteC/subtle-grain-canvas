
import React from 'react';
import { Shield } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#8B6914] via-[#FFC94D] to-[#8B6914]">
      <div className="container max-w-5xl mx-auto text-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Shield className="h-10 w-10 text-white" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#202020]">
            Book 15 qualified meetings in 30 days—or we work for free.
          </h2>
        </div>
      </div>
    </section>
  );
};
