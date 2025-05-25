
import React from 'react';
import { NoiseTexture } from '@/components/ui/noise-texture';
import { colors, noiseConfigs, zIndex } from '@/lib/design-tokens';

/**
 * Global background texture component
 * Provides the base dark background with subtle noise texture
 */
const TextureBackground: React.FC = () => {
  return (
    <div className="fixed inset-0" style={{ zIndex: zIndex.background }}>
      <div className="absolute inset-0" style={{ backgroundColor: colors.dark }}></div>
      <NoiseTexture {...noiseConfigs.hero} />
    </div>
  );
};

export default TextureBackground;
