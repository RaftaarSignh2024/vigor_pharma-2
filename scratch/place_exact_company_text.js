const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage(fileName, text, topY, leftX, textWidth, fontSize, color) {
  const inputPath = path.join(__dirname, '..', 'public', fileName);
  if (!fs.existsSync(inputPath)) return;

  const textSvg = Buffer.from(`
    <svg width="${textWidth}" height="28" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="${fontSize}" fill="${color}" letter-spacing="1.1">${text}</text>
    </svg>
  `);

  const tempBuffer = await sharp(inputPath)
    .composite([
      {
        input: textSvg,
        top: topY,
        left: leftX
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(inputPath + '.tmp');
  fs.renameSync(inputPath + '.tmp', inputPath);
  console.log(`Updated ${fileName} with "${text}" at top=${topY}, left=${leftX}`);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Process diaper nb, s, m, l with "MANUFACTURED BY VIGOR LIFE CARE LLP" on bottom package edge
  const diaperFiles = ['diaper_nb.jpg', 'diaper_s.jpg', 'diaper_m.jpg', 'diaper_l.jpg'];
  for (const f of diaperFiles) {
    await processImage(f, 'MANUFACTURED BY VIGOR LIFE CARE LLP', 655, 420, 480, 13, '#003B73');
  }

  console.log('All diaper images updated with MANUFACTURED BY VIGOR LIFE CARE LLP successfully!');
}

main().catch(console.error);
