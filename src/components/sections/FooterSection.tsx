
import React from 'react';
import SectionLayout from '../SectionLayout';

const FooterSection = () => {
  return (
    <SectionLayout variant="default" id="footer" className="py-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-white/50 text-center max-w-md text-sm">
          [Footer Text]
        </p>
        <div className="text-white/30 text-xs">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </SectionLayout>
  );
};

export default FooterSection;
