
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Sparkline = ({ color }: { color: string }) => (
  <svg width="100%" height="40" viewBox="0 0 100 40" className="mb-4">
    <path 
      d="M0,35 L5,32 L10,34 L15,30 L20,31 L25,28 L30,25 L35,28 L40,22 L45,23 L50,18 L55,20 L60,15 L65,13 L70,15 L75,10 L80,12 L85,8 L90,5 L95,8 L100,2" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const ResultsSection = () => {
  return (
    <section className="w-full py-24 px-4 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Lead Gen That <span className="bronze-gradient-fix">Wins</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ 
              y: -5,
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
            }}
            transition={{ 
              duration: 0.3 
            }}
          >
            <Card className="bg-[#202020]/[0.32] border-white/10 overflow-hidden">
              <CardHeader className="pb-0 pt-6">
                <Sparkline color="#FFC94D" />
                <h3 className="text-xl font-medium text-white">Solar Results</h3>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold py-4">
                  <span className="bronze-gradient-fix">16%</span> 
                  <span className="text-white/60 text-lg font-normal"> close-rate</span>
                </p>
                <p className="text-white/60">vs 3% industry average</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              y: -5,
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
            }}
            transition={{ 
              duration: 0.3 
            }}
          >
            <Card className="bg-[#202020]/[0.32] border-white/10 overflow-hidden">
              <CardHeader className="pb-0 pt-6">
                <Sparkline color="#FFC94D" />
                <h3 className="text-xl font-medium text-white">Roofing Results</h3>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold py-4">
                  <span className="bronze-gradient-fix">5×</span> 
                  <span className="text-white/60 text-lg font-normal"> more premium jobs</span>
                </p>
                <p className="text-white/60">while competitors chase cold leads</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
