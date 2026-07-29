const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processPadImage(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  // Ultra-legible natural text placed in the white cloud brand area
  const textSvg = Buffer.from(`
    <svg width="480" height="32" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#3B1560" letter-spacing="1.3">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: textSvg,
        top: 544,
        left: 130
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Updated ${fileName} with perfectly placed company text`);
}

async function processDiaperImage(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  // Clean, high-contrast text on diaper package front panel (above bottom fold)
  const textSvg = Buffer.from(`
    <svg width="420" height="28" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14" fill="#003B73" letter-spacing="1.1">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: textSvg,
        top: 615,
        left: 430
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Updated ${fileName} with perfectly placed company text`);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. Process Sanitary Pads
  const padFiles = ['sanitary_pads_s.jpg', 'sanitary_pads_m.jpg', 'sanitary_pads_l.jpg'];
  for (const f of padFiles) {
    await processPadImage(f);
  }

  // 2. Generate slider_sanitary_pads_new.png (1024x1024 full size square)
  const padImg = sharp(path.join(publicDir, 'sanitary_pads_s.jpg'));
  const padBuffer = await padImg.toBuffer();

  await sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 3,
      background: { r: 255, g: 255, b: 255 }
    }
  })
  .composite([
    {
      input: padBuffer,
      top: 102,
      left: 0
    }
  ])
  .toFile(path.join(publicDir, 'slider_sanitary_pads_new.png'));
  console.log('Successfully updated slider_sanitary_pads_new.png!');

  // 3. Process Diapers
  const diaperFiles = ['diaper_nb.jpg', 'diaper_s.jpg', 'diaper_m.jpg', 'diaper_l.jpg'];
  for (const f of diaperFiles) {
    await processDiaperImage(f);
  }
}

main().catch(console.error);
