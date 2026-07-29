const sharp = require('sharp');

async function main() {
  const padsBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads.png';
  const diapersBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers.png';

  // 1. Sanitary Pads: Place company name text at box bottom
  const padTextSvg = Buffer.from(`
    <svg width="180" height="26" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="12" fill="#002D62" letter-spacing="1.2">VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const padTextRotated = await sharp(padTextSvg)
    .rotate(-4.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(padsBase)
    .composite([
      {
        input: padTextRotated,
        top: 600,
        left: 668
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads_new.png');

  // 2. Baby Diapers: Place company name text at package bottom left
  const diaperTextSvg = Buffer.from(`
    <svg width="150" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="50%" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#003B73" letter-spacing="1">VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  const diaperTextRotated = await sharp(diaperTextSvg)
    .rotate(-2.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(diapersBase)
    .composite([
      {
        input: diaperTextRotated,
        top: 618,
        left: 572
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers_new.png');

  console.log('Placed company name at package bottom cleanly!');
}

main().catch(console.error);
