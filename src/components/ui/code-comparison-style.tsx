
"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { useState } from "react";

/**
 * Code Comparison Style Component
 * Recreates Magic UI's CodeComparison layout for Pain-to-Promise transformation
 */
export function CodeComparisonStyle() {
  const [isRightHovered, setIsRightHovered] = useState(false);

  const problemsCode = `01  function currentLeadProcess() {
02    const leads = marketingCampaign.getAllLeads();
03    
04    // ❌ No qualification system
05    const prospects = leads.filter(lead => {
06      return lead.phoneNumber.exists(); // Accept anyone with phone
07    });
08    
09    prospects.forEach(lead => {
10      // ❌ Manual follow-up nightmare
11      salesTeam.addToCallList(lead);
12      
13      // ❌ Sky-high acquisition costs
14      adSpend.charge(450); // Average cost per lead
15      
16      // ❌ Ghost leads drain resources
17      if (lead.respondsToCall === false) {
18        wasted.time += 45; // Minutes per dead lead
19        wasted.money += 450; // Cost per ghost lead
20      }
21    });
22    
23    // ❌ Conversion rate disaster
24    const actualBuyers = prospects.filter(p => p.buys);
25    console.log(\`Conversion: \${actualBuyers.length/prospects.length * 100}%\`);
26    // Typical output: "Conversion: 2.3%"
27  }`;

  const solutionCode = `01  function optimizedLeadSystem() {
02    const leads = aiTriage.getQualifiedProspects();
03    
04    // ✅ Intelligent pre-qualification
05    const buyers = leads.filter(lead => {
06      return ai.verifyBuyingIntent(lead) && ai.validateBudget(lead);
07    });
08    
09    buyers.forEach(qualifiedBuyer => {
10      // ✅ Automated calendar booking
11      calendar.autoSchedule(qualifiedBuyer);
12      
13      // ✅ Dramatically lower costs
14      cost.perLead = 89; // 80% cost reduction
15      
16      // ✅ Only real buyers reach you
17      guaranteedMeeting.book(qualifiedBuyer);
18    });
19    
20    // ✅ Conversion rate explosion
21    const closedDeals = buyers.filter(b => b.converts);
22    console.log(\`Conversion: \${closedDeals.length/buyers.length * 100}%\`);
23    // Typical output: "Conversion: 47%"
24  }`;

  return (
    <div className="w-full bg-[#171717] relative">
      <div className="w-full max-w-[1280px] mx-auto relative">
        <div className="px-4 md:px-6 py-16 lg:py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
              From <span className="text-red-400">Bleeding Money</span> to <span className="bronze-gradient-fix">Profitable Pipeline</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-roboto">
              Stop the ghost lead nightmare. Start filling your calendar with qualified buyers who actually show up and buy.
            </p>
          </motion.div>

          {/* Code Comparison Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl border border-white/20 bg-[#0d1117] overflow-hidden"
          >
            <NoiseTexture opacity={0.03} />
            
            {/* Header Tabs */}
            <div className="flex border-b border-white/10">
              <div className="flex-1 border-r border-white/10">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22]">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-white/90 font-mono">current-process.problems</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-red-400"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22]">
                  <CheckCircle className="w-4 h-4 text-[#efcc8a]" />
                  <span className="text-sm font-medium text-white/90 font-mono">optimized-solution.benefits</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-[#efcc8a]"></div>
                </div>
              </div>
            </div>

            {/* Code Content */}
            <div className="flex min-h-[500px]">
              {/* Problems Side (Left) */}
              <div className="flex-1 border-r border-white/10 relative bg-[#0d1117]">
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <pre className="text-white/80 whitespace-pre-wrap">
                    {problemsCode.split('\n').map((line, index) => {
                      const isHighlighted = line.includes('❌') || line.includes('wasted') || line.includes('ghost') || line.includes('2.3%');
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className={`${isHighlighted ? 'bg-red-400/10 border-l-2 border-red-400 pl-2 -ml-2' : ''} hover:bg-white/5 transition-colors duration-200`}
                        >
                          {line}
                        </motion.div>
                      );
                    })}
                  </pre>
                </div>
              </div>

              {/* Solutions Side (Right) */}
              <div 
                className="flex-1 relative bg-[#0d1117] overflow-hidden"
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
              >
                {/* Blur overlay */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 z-10 ${
                    isRightHovered ? 'backdrop-blur-0 opacity-0' : 'backdrop-blur-md opacity-100'
                  }`}
                  style={{ 
                    background: isRightHovered ? 'transparent' : 'rgba(13, 17, 23, 0.3)' 
                  }}
                />
                
                {/* Hover hint */}
                {!isRightHovered && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[#efcc8a] font-semibold text-lg mb-2"
                      >
                        Hover to reveal the solution
                      </motion.div>
                      <div className="text-white/40 text-sm">See how AI transforms your lead process</div>
                    </div>
                  </div>
                )}

                <div className="p-6 font-mono text-sm leading-relaxed relative z-0">
                  <pre className="text-white/80 whitespace-pre-wrap">
                    {solutionCode.split('\n').map((line, index) => {
                      const isHighlighted = line.includes('✅') || line.includes('80% cost reduction') || line.includes('47%') || line.includes('autoSchedule');
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className={`${isHighlighted ? 'bg-[#efcc8a]/10 border-l-2 border-[#efcc8a] pl-2 -ml-2' : ''} hover:bg-white/5 transition-colors duration-200`}
                        >
                          {line}
                        </motion.div>
                      );
                    })}
                  </pre>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-red-400/30 via-white/10 to-[#efcc8a]/30"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
