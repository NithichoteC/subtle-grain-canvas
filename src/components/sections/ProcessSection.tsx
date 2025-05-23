
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessCard = ({ title, description, icon }: ProcessCardProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-8 rounded-xl border border-white/10 bg-[#202020]/[0.32] transition-all"
      whileHover={{ 
        boxShadow: '0 0 15px rgba(255, 201, 77, 0.25)',
        borderColor: 'rgba(255, 201, 77, 0.4)'
      }}
    >
      <div className="rounded-full p-4 border border-[#FFC94D]/30 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-4 text-white">{title}</h3>
      <p className="text-white/60 text-center">{description}</p>
    </motion.div>
  );
};

export const ProcessSection = () => {
  return (
    <section className="w-full py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Our <span className="bronze-gradient-fix">Three-Step</span> Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProcessCard 
            title="Capture" 
            description="Human-tone Meta ads attract high-intent solar & roofing prospects."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFC94D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <circle cx="10" cy="13" r="2"/>
              <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/>
            </svg>}
          />
          
          <ProcessCard 
            title="Qualify" 
            description="AI agents segment every lead into ready, warm, or nurture tiers."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFC94D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
              <polyline points="7.5 19.79 7.5 14.6 3 12"/>
              <polyline points="21 12 16.5 14.6 16.5 19.79"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            </svg>}
          />
          
          <ProcessCard 
            title="Book" 
            description="Only decision-ready buyers land on the client's calendar—no time-wasters."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFC94D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
              <path d="M8 14h.01"/>
              <path d="M12 14h.01"/>
              <path d="M16 14h.01"/>
              <path d="M8 18h.01"/>
              <path d="M12 18h.01"/>
              <path d="M16 18h.01"/>
            </svg>}
          />
        </div>
      </div>
    </section>
  );
};
