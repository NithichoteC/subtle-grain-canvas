
"use client";

interface UnifiedGridSystemProps {
  className?: string;
}

export function UnifiedGridSystem({ className }: UnifiedGridSystemProps) {
  return (
    <div className={`w-screen h-screen pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left vertical line - full viewport height */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
      
      {/* Right vertical line - full viewport height */}
      <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
      
      {/* Bottom horizontal line - full viewport width, positioned at hero section bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" style={{ 
        top: 'auto',
        bottom: 'calc(100vh - 100vh)' // This will be adjusted based on hero section height
      }} />
      
      {/* Inner content area markers - subtle guides for the content container */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-5xl relative">
          {/* Inner left guide - very subtle */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
          
          {/* Inner right guide - very subtle */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}
