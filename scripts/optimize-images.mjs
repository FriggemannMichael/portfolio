import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMG_DIR = join(__dirname, '../public/img');
const OUTPUT_DIR = IMG_DIR; // Overwrite originals

// Images that need aggressive compression (> 500KB)
const LARGE_IMAGES = ['ellpollo.png', 'pokedex.png', 'join.png', 'portrait.png'];

async function optimizeImage(filePath) {
  const filename = basename(filePath);
  const ext = extname(filePath).toLowerCase();

  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  const stats = await stat(filePath);
  const sizeKB = stats.size / 1024;

  console.log(`Processing: ${filename} (${sizeKB.toFixed(1)} KB)`);

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Resize if image is too large (max 1920px width for project screenshots)
  let resized = image;
  if (metadata.width > 1920) {
    resized = image.resize(1920, null, { withoutEnlargement: true });
    console.log(`  Resizing from ${metadata.width}px to 1920px width`);
  }

  // Compress based on file type
  const outputPath = filePath;

  if (ext === '.png') {
    await resized
      .png({
        quality: 80,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath + '.tmp');
  } else {
    await resized
      .jpeg({
        quality: 85,
        mozjpeg: true
      })
      .toFile(outputPath + '.tmp');
  }

  // Replace original with optimized version
  const { rename, unlink } = await import('fs/promises');
  await unlink(filePath);
  await rename(outputPath + '.tmp', outputPath);

  const newStats = await stat(filePath);
  const newSizeKB = newStats.size / 1024;
  const savings = ((sizeKB - newSizeKB) / sizeKB * 100).toFixed(1);

  console.log(`  Optimized: ${newSizeKB.toFixed(1)} KB (saved ${savings}%)`);
}

async function main() {
  console.log('Image Optimization Script');
  console.log('=========================\n');

  for (const filename of LARGE_IMAGES) {
    const filePath = join(IMG_DIR, filename);
    try {
      await optimizeImage(filePath);
    } catch (err) {
      console.error(`Error processing ${filename}:`, err.message);
    }
  }

  console.log('\nDone!');
}

main();
