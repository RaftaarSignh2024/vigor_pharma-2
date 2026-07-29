const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testPlacement() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'sanitary_pads_s.jpg');

  // Text placed cleanly inside the white cloud area below 'Soft Comfort, Confident You'
  const textSvg = Buffer.from(`
    <svg width="460" height="30" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="15" fill="#3B1560" letter-spacing="1.2">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  await sharp(inputPath)
    .composite([
      {
        input: textSvg,
        top: 546,
        left: 140
      }
    ])
    .toFile(path.join(publicDir, 'sanitary_pads_s_cloud_test.jpg'));

  console.log('Generated test image at public/sanitary_pads_s_cloud_test.jpg');
}

testPlacement().catch(console.error);
