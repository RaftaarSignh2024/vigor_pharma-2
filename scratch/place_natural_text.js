const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testNaturalText() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'sanitary_pads_s.jpg');

  // 1. Test Option 1: Direct natural text below Soft Comfort, Confident You
  // Color #45246D matching package purple text
  const textSub = Buffer.from(`
    <svg width="400" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#45246D" letter-spacing="1">BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  await sharp(inputPath)
    .composite([{ input: textSub, top: 540, left: 180 }])
    .toFile(path.join(publicDir, 'sanitary_pads_s_natural_sub.jpg'));

  // 2. Test Option 2: Direct natural text printed along the package bottom front edge
  // Color #3D1C63, font-weight 800, no background pill/sticker
  const textBottom = Buffer.from(`
    <svg width="480" height="26" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13.5" fill="#3D1C63" letter-spacing="1.2">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  await sharp(inputPath)
    .composite([{ input: textBottom, top: 755, left: 120 }])
    .toFile(path.join(publicDir, 'sanitary_pads_s_natural_bottom.jpg'));

  console.log('Generated natural text test images!');
}

testNaturalText().catch(console.error);
