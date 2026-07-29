const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. Sanitary Pads images (sanitary_pads_s.jpg, sanitary_pads_m.jpg, sanitary_pads_l.jpg)
  const padImages = ['sanitary_pads_s.jpg', 'sanitary_pads_m.jpg', 'sanitary_pads_l.jpg'];
  
  const padTextSvg = Buffer.from(`
    <svg width="240" height="34" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14" fill="#002D62" letter-spacing="1.2">VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const padTextRotated = await sharp(padTextSvg)
    .rotate(-4.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  for (const imgName of padImages) {
    const inputPath = path.join(publicDir, imgName);
    if (!fs.existsSync(inputPath)) continue;
    
    // Composite onto image
    const tempBuffer = await sharp(inputPath)
      .composite([
        {
          input: padTextRotated,
          top: 615,
          left: 175
        }
      ])
      .toBuffer();

    await sharp(tempBuffer).toFile(inputPath + '.tmp');
    fs.renameSync(inputPath + '.tmp', inputPath);
    console.log(`Updated ${imgName} with company name.`);
  }

  // 2. Diaper images (diaper_nb.jpg, diaper_s.jpg, diaper_m.jpg, diaper_l.jpg)
  const diaperImages = ['diaper_nb.jpg', 'diaper_s.jpg', 'diaper_m.jpg', 'diaper_l.jpg'];

  const diaperTextSvg = Buffer.from(`
    <svg width="220" height="30" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13" fill="#003B73" letter-spacing="1.2">VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const diaperTextRotated = await sharp(diaperTextSvg)
    .rotate(-2.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  for (const imgName of diaperImages) {
    const inputPath = path.join(publicDir, imgName);
    if (!fs.existsSync(inputPath)) continue;

    const tempBuffer = await sharp(inputPath)
      .composite([
        {
          input: diaperTextRotated,
          top: 650,
          left: 450
        }
      ])
      .toBuffer();

    await sharp(tempBuffer).toFile(inputPath + '.tmp');
    fs.renameSync(inputPath + '.tmp', inputPath);
    console.log(`Updated ${imgName} with company name.`);
  }

  console.log('All individual pad and diaper images updated with company name successfully!');
}

main().catch(console.error);
