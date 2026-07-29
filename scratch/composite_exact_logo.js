const sharp = require('sharp');

async function main() {
  const padsBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads.png';
  const diapersBase = 'd:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers.png';
  const logoPath = 'd:/Project/Vigor-LLP/templates/v3/public/logo.png';

  // 1. Sanitary Pads: Overlay exact logo.png
  const padLogo = await sharp(logoPath)
    .resize(110, null)
    .toBuffer();

  await sharp(padsBase)
    .composite([
      {
        input: padLogo,
        top: 395,
        left: 715
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_sanitary_pads_new.png');

  // 2. Baby Diapers: Overlay exact logo.png centered above Sky Soft
  const diaperLogo = await sharp(logoPath)
    .resize(85, null)
    .toBuffer();

  await sharp(diapersBase)
    .composite([
      {
        input: diaperLogo,
        top: 395,
        left: 615
      }
    ])
    .toFile('d:/Project/Vigor-LLP/templates/v3/public/slider_baby_diapers_new.png');

  console.log('Clean logo compositing complete!');
}

main().catch(console.error);
