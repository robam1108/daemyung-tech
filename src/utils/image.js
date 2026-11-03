import { DEFAULT_SIZE, DEFAULT_VARIANTS, SIZES, VARIANTS } from '../data/imageSizes';

// "/images/biz-laser.webp" -> "/images/biz-laser-640.webp 640w, /images/biz-laser.webp 1200w"
export function srcSet(src) {
  const name = src.split('/').pop().replace('.webp', '');
  const [full] = SIZES[name] ?? DEFAULT_SIZE;
  const widths = VARIANTS[name] ?? DEFAULT_VARIANTS;
  return [...widths.map((w) => `/images/${name}-${w}.webp ${w}w`), `${src} ${full}w`].join(', ');
}
