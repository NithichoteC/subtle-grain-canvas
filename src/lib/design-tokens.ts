
/**
 * Design System Tokens
 * Centralized configuration for colors, spacing, gradients, and animations
 */

// Color Palette
export const colors = {
  dark: '#171717',
  bronze: {
    base: '#efcc8a',
    light: '#e2d1c3',
    dark: '#b8860b',
    medium: '#cd7f32',
    gold: '#ffd700',
    deep: '#956f29'
  },
  white: {
    pure: '#ffffff',
    10: 'rgba(255, 255, 255, 0.1)',
    15: 'rgba(255, 255, 255, 0.15)',
    20: 'rgba(255, 255, 255, 0.2)',
    40: 'rgba(255, 255, 255, 0.4)',
    50: 'rgba(255, 255, 255, 0.5)',
    60: 'rgba(255, 255, 255, 0.6)',
    80: 'rgba(255, 255, 255, 0.8)'
  }
} as const;

// Layout Constants
export const layout = {
  containerMaxWidth: '1280px', // 5xl
  sideBlockMaxWidth: '280px', // Optimized for better proportions
  borderWidth: '1px',
  edgeEnhancementWidth: '20%'
} as const;

// Animation Timings
export const animations = {
  textRotation: 2000, // ms
  gradientShine: 6000, // ms
  bronzeShine: 6000, // ms
  entrance: {
    duration: 0.5,
    delay: 0.3
  }
} as const;

// Noise Texture Configurations
export const noiseConfigs = {
  hero: {
    opacity: 0.12,
    baseFrequency: 0.65,
    numOctaves: 3,
    backgroundSize: '200px 200px'
  },
  sideBlocks: {
    opacity: 0.04, // Reduced for cleaner appearance
    baseFrequency: 0.8,
    numOctaves: 2,
    backgroundSize: '120px 120px'
  }
} as const;

// Z-Index Scale
export const zIndex = {
  background: -1,
  sideBlocks: 0,
  content: 10,
  navbar: 50
} as const;

// Fine Line Pattern Constants
export const patterns = {
  lineSpacing: 18, // px between vertical lines
  lineCount: 8, // number of lines per side
  lineOpacityStart: 0.6,
  lineOpacityDecay: 0.05
} as const;
