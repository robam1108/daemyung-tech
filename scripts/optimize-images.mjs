// Converts raw photos in .image-src/ to tone-matched WebP files in public/images/,
// plus smaller width variants for srcset.
// Usage: npm run images
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { DEFAULT_SIZE, DEFAULT_VARIANTS, SIZES, VARIANTS } from '../src/data/imageSizes.js';

const SRC = '.image-src';
const OUT = 'public/images';

// Per-photo brightness so very dark and very bright sources sit closer together.
const BRIGHTNESS = {
  'hero-laser-cutting': 1.18,
  'capability-floor': 1.12,
  'proj-cover': 0.88,
};

fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.jpg'));

for (const file of files) {
  const name = path.basename(file, '.jpg');
  const [width, height] = SIZES[name] ?? DEFAULT_SIZE;

  // Light desaturation + slightly cool tint keeps every photo in one family.
  const base = await sharp(path.join(SRC, file))
    .resize({ width, height, fit: 'cover', position: 'centre' })
    .modulate({ saturation: 0.82, brightness: BRIGHTNESS[name] ?? 0.98 })
    .recomb([
      [0.97, 0.02, 0.01],
      [0.01, 0.98, 0.01],
      [0.01, 0.03, 1.0],
    ])
    .toBuffer();

  const outputs = [[width, `${name}.webp`], ...(VARIANTS[name] ?? DEFAULT_VARIANTS).map((w) => [w, `${name}-${w}.webp`])];

  for (const [w, outName] of outputs) {
    const info = await sharp(base)
      .resize({ width: w })
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(OUT, outName));
    console.log(`${outName}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
  }
}
