// Détoure le fond blanc du logo et génère les variantes de la charte :
//   lifitness-logo-full.png  (transparent, avec trait)
//   lifitness-logo-nav.png   (transparent, sans trait)
//   lifitness-logo-white.png / lifitness-logo-black.png (monochromes)
// Usage : node scripts/process-logo.mjs [fichier-source.png]
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src =
  process.argv[2] ??
  path.join(root, 'src/assets/logo/lifitness-logo-source.png');
const outDir = path.join(root, 'src/assets/logo');

const image = sharp(src).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

// Alpha déduit de la saturation + luminance : le fond blanc et le halo
// clair deviennent transparents, les aplats colorés restent opaques.
for (let i = 0; i < data.length; i += 4) {
  const r = data[i],
    g = data[i + 1],
    b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / 255;
  const lum = (r + g + b) / 3 / 255;
  const score = sat * 1.5 + (1 - lum) * 1.5;
  data[i + 3] = Math.min(data[i + 3], Math.round(Math.min(1, score) * 255));
}

const transparent = sharp(Buffer.from(data), {
  raw: { width, height, channels: 4 },
});
await transparent.png().toFile(path.join(outDir, 'lifitness-logo-full.png'));

// Le trait sous le wordmark forme la dernière bande de pixels opaques :
// on la détecte par histogramme de lignes pour couper la variante nav.
const rowHits = new Array(height).fill(0);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * 4 + 3] > 40) rowHits[y]++;
  }
}
let y = height - 1;
while (y > 0 && rowHits[y] <= 1) y--;
const underlineEnd = y;
while (y > 0 && rowHits[y] > 1) y--;
const underlineStart = y;
let gap = underlineStart;
while (gap > 0 && rowHits[gap] <= 1) gap--;
const navHeight = Math.min(gap + 1, underlineStart);

if (underlineEnd - underlineStart > 2 && navHeight > height / 2) {
  await sharp(Buffer.from(data), { raw: { width, height, channels: 4 } })
    .extract({ left: 0, top: 0, width, height: navHeight })
    .png()
    .toFile(path.join(outDir, 'lifitness-logo-nav.png'));
} else {
  await transparent
    .clone()
    .png()
    .toFile(path.join(outDir, 'lifitness-logo-nav.png'));
}

const mono = (value, name) => {
  const buf = Buffer.from(data);
  for (let i = 0; i < buf.length; i += 4) {
    buf[i] = buf[i + 1] = buf[i + 2] = value;
  }
  return sharp(Buffer.from(buf), { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(outDir, name));
};
await mono(255, 'lifitness-logo-white.png');
await mono(9, 'lifitness-logo-black.png');

console.log('Variantes générées dans src/assets/logo/');
