const sharp = require('sharp');

async function main() {
  const padsBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads.png';
  const diapersBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers.png';
  const logoPath = 'd:/Project/Vigor-LLP/templates/v3/public/logo.png';

  // 1. Sanitary Pads: Rotate logo -4.5 deg, width 85px, position top: 392, left: 722
  const padLogoRotated = await sharp(logoPath)
    .resize(85, null)
    .rotate(-4.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(padsBase)
    .composite([
      {
        input: padLogoRotated,
        top: 392,
        left: 722
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads_new.png');

  // 2. Baby Diapers: Rotate logo -2.5 deg, width 72px, position top: 405, left: 642
  const diaperLogoRotated = await sharp(logoPath)
    .resize(72, null)
    .rotate(-2.5, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(diapersBase)
    .composite([
      {
        input: diaperLogoRotated,
        top: 405,
        left: 642
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers_new.png');

  console.log('Precise perspective logo alignment completed!');
}

main().catch(console.error);
