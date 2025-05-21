
import React from 'react';
import SectionLayout from '../SectionLayout';
import { Card } from "@/components/ui/card";

const KPISnapshotSection = () => {
  return (
    <SectionLayout variant="graphite" id="kpi-snapshot">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 flex flex-col items-center justify-center">
          <h3 className="text-white/60 text-xl mb-2">Show-Rate Today</h3>
          <p className="text-4xl font-bold text-white">72%</p>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 flex flex-col items-center justify-center">
          <h3 className="text-white/60 text-xl mb-2">Meetings This Week</h3>
          <p className="text-4xl font-bold text-white">134</p>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-xs bg-black/30 rounded-lg p-4 backdrop-blur-md border border-white/5">
            <div className="w-full h-12 bg-white/5 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-white/10 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-white/10 rounded"></div>
          </div>
          <p className="text-white/40 text-xs mt-2">[Slack Notification Preview]</p>
        </Card>
      </div>
    </SectionLayout>
  );
};

export default KPISnapshotSection;
