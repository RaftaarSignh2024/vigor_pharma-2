const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function applyBadgeToPads(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  // Ultra-crisp high-contrast white pill badge with dark navy bold text
  const badgeSvg = Buffer.from(`
    <svg width="600" height="42" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="596" height="38" rx="19" ry="19" fill="#FFFFFF" stroke="#003B73" stroke-width="2.5"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="18" fill="#002D62" letter-spacing="1.5">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: badgeSvg,
        top: 725,
        left: 212
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Applied crisp company badge to ${fileName}`);
}

async function applyBadgeToDiapers(fileName) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, fileName);
  if (!fs.existsSync(filePath)) return;

  const badgeSvg = Buffer.from(`
    <svg width="550" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="546" height="36" rx="18" ry="18" fill="#FFFFFF" stroke="#003B73" stroke-width="2.5"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#003B73" letter-spacing="1.5">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const tempBuffer = await sharp(filePath)
    .composite([
      {
        input: badgeSvg,
        top: 645,
        left: 385
      }
    ])
    .toBuffer();

  await sharp(tempBuffer).toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log(`Applied crisp company badge to ${fileName}`);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. Process Sanitary Pad Images
  const padFiles = ['sanitary_pads_s.jpg', 'sanitary_pads_m.jpg', 'sanitary_pads_l.jpg'];
  for (const f of padFiles) {
    await applyBadgeToPads(f);
  }

  // 2. Generate slider_sanitary_pads_new.png (1024x1024 square with white background)
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
  console.log('Successfully updated slider_sanitary_pads_new.png with ultra-clear company badge!');

  // 3. Process Diaper Images
  const diaperFiles = ['diaper_nb.jpg', 'diaper_s.jpg', 'diaper_m.jpg', 'diaper_l.jpg'];
  for (const f of diaperFiles) {
    await applyBadgeToDiapers(f);
  }
}

main().catch(console.error);
