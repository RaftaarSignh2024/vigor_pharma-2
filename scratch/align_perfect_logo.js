const sharp = require('sharp');

async function main() {
  const padsBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads.png';
  const diapersBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers.png';
  const logoPath = 'd:/Project/Vigor-LLP/templates/v3/public/logo.png';

  // 1. Sanitary Pads: Perfectly centered logo above Sky Soft
  const padLogo = await sharp(logoPath)
    .resize(100, null)
    .toBuffer();

  await sharp(padsBase)
    .composite([
      {
        input: padLogo,
        top: 390,
        left: 720
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads_new.png');

  // 2. Baby Diapers: Perfectly centered logo above Sky Soft inside cloud shape
  const diaperLogo = await sharp(logoPath)
    .resize(80, null)
    .toBuffer();

  await sharp(diapersBase)
    .composite([
      {
        input: diaperLogo,
        top: 412,
        left: 635
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers_new.png');

  console.log('Perfect logo alignment completed!');
}

main().catch(console.error);
