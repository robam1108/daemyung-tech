// Shared by scripts/optimize-images.mjs (generation) and src/utils/image.js (srcset).

// name -> [width, height] of the full-size output (cover-cropped, centered)
export const SIZES = {
  'hero-laser-cutting': [2200, 1300],
  'cta-grinding': [1920, 900],
  'contact-workshop': [1920, 1200],
  'company-factory': [1100, 1320],
  'capability-floor': [1100, 1320],
};
export const DEFAULT_SIZE = [1200, 900]; // 4:3 cards

// Smaller widths generated next to the full-size file as `<name>-<width>.webp`
export const VARIANTS = {
  'hero-laser-cutting': [640, 1280],
  'cta-grinding': [640, 1280],
  'contact-workshop': [640, 1280],
};
export const DEFAULT_VARIANTS = [480, 800];
