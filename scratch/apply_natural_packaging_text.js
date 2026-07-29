const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processPadImage(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  // Direct printed text on package artwork (No white box, no sticker border)
  // Matching package typography and color #3B165E
  const textSvg = Buffer.from(`
    <svg width="450" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#3B165E" letter-spacing="1.2">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: textSvg,
        top: 758,
        left: 135
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Naturally printed company name on ${fileName}`);
}

async function processDiaperImage(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  // Direct printed text on diaper package artwork (matching original blue package text)
  const textSvg = Buffer.from(`
    <svg width="380" height="22" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#003B73" letter-spacing="1">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: textSvg,
        top: 658,
        left: 450
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Naturally printed company name on ${fileName}`);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. Sanitary Pads
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
  console.log('Successfully updated slider_sanitary_pads_new.png with natural packaging text!');

  // 3. Diapers
  const diaperFiles = ['diaper_nb.jpg', 'diaper_s.jpg', 'diaper_m.jpg', 'diaper_l.jpg'];
  for (const f of diaperFiles) {
    await processDiaperImage(f);
  }
}

main().catch(console.error);
