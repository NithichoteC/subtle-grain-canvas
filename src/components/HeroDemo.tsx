
import React from 'react';
import { NavBarDemo } from './NavBarDemo';
import { Hero } from '@/components/ui/animated-hero';
import { EarlyAdopterSection } from '@/components/ui/early-adopter-section';
import { TrustBar } from '@/components/ui/trust-bar';

export function HeroDemo() {
  return (
    <div className="relative w-full min-h-screen bg-[#171717] overflow-x-hidden">
      <NavBarDemo />
      <Hero />
      <EarlyAdopterSection />
      <TrustBar />
    </div>
  );
}
