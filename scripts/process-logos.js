// One-shot logo processing: trim whitespace, convert to WebP (85q), copy SVGs as-is.
// Run: node scripts/process-logos.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'assets', 'logos');

// [sourceFile, outputName, needsResize]
const RASTER = [
  ['benjamin-moore.jpg',  'benjamin-moore.webp', false],
  ['ppg.png',             'ppg.webp',             false],
  ['baumit.png',          'baumit.webp',           false],
  ['mapei-logo.png',      'mapei.webp',            false],
  ['Ceresit-logo.webp',   'ceresit.webp',          false],
  ['Vitex_Logo.png',      'vitex.webp',            true],  // 136KB — resize to 1200px max
  ['peli-logo.png',       'peli.webp',             false],
  ['swiss-krono-logo.png','swiss-krono.webp',      false],
  ['kronopol-logo.png',   'kronopol.webp',         false],
  ['classen-logo.png',    'classen.webp',          false],
  ['sika.png',            'sika.webp',             false],
  ['Logo_Knauf.png',      'knauf.webp',            false],
  ['egger.png',           'egger.webp',            false],
  ['kaindl-logo.png',     'kaindl.webp',           false],
];

const SVG = [
  ['Tarkett_logo.svg', 'tarkett.svg'],
];

async function processRaster([src, out, resize]) {
  const input = path.join(ROOT, src);
  const output = path.join(OUT, out);
  let pipeline = sharp(input).trim({ threshold: 15 });
  if (resize) pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
  pipeline = pipeline.webp({ quality: 85 });
  await pipeline.toFile(output);
  const { size } = fs.statSync(output);
  console.log(`✓ ${out} (${(size / 1024).toFixed(1)} KB)`);
}

function copySvg([src, out]) {
  fs.copyFileSync(path.join(ROOT, src), path.join(OUT, out));
  console.log(`✓ ${out} (SVG — copied as-is)`);
}

(async () => {
  console.log(`Output → ${OUT}\n`);
  for (const entry of RASTER) await processRaster(entry);
  for (const entry of SVG) copySvg(entry);
  console.log('\nDone. All logos processed.');
})();
