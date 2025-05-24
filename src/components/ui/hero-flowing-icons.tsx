
"use client";

import { PremiumIconFlow } from "./premium-icon-flow";

export function HeroFlowingIcons() {
  // Icon sources mapping
  const iconSources = {
    hourglass: '/lovable-uploads/b0c0234e-dcb0-411b-92c3-cd4b7f02f33c.png',
    ghost: '/lovable-uploads/62ea6bf2-2d09-47bf-9dc8-c30be11f434f.png',
    coin: '/lovable-uploads/0d0105b1-367f-4bcc-b5fc-e609a75d3abf.png',
    calendar: '/lovable-uploads/542f1a9f-7b91-4543-b55b-58b2fb08d566.png',
    'money-bag': '/lovable-uploads/65325b28-c9d6-467a-b24f-9bd58bcf64d5.png',
    handshake: '/lovable-uploads/42096f5b-7ec3-4dc2-b82b-7e78d854afdd.png'
  };

  return (
    <div className="absolute inset-0 z-5">
      {/* Left side flowing icons - hourglass and coin flowing left to right */}
      <PremiumIconFlow
        side="left"
        iconTypes={['hourglass', 'coin']}
        iconSources={iconSources}
        density={4}
      />
      
      {/* Right side flowing icons - calendar and money-bag flowing right to left */}
      <PremiumIconFlow
        side="right"
        iconTypes={['calendar', 'money-bag']}
        iconSources={iconSources}
        density={4}
      />
    </div>
  );
}
