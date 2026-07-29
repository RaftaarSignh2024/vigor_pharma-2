const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Option 1: White pill badge with dark navy text
  const badgeWhite = Buffer.from(`
    <svg width="600" height="42" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="596" height="38" rx="20" ry="20" fill="#FFFFFF" stroke="#003B73" stroke-width="2"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="18" fill="#002D62" letter-spacing="1.5">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  // Option 2: Solid Navy/Purple pill badge with white text
  const badgeNavy = Buffer.from(`
    <svg width="600" height="42" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="596" height="38" rx="20" ry="20" fill="#002D62" stroke="#FFFFFF" stroke-width="2"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="18" fill="#FFFFFF" letter-spacing="1.5">MANUFACTURED BY VIGOR LIFE CARE LLP</text>
    </svg>
  `);

  // Apply Option 1 to sanitary_pads_s.jpg
  await sharp(path.join(publicDir, 'sanitary_pads_s.jpg'))
    .composite([{ input: badgeWhite, top: 725, left: 212 }])
    .toFile(path.join(publicDir, 'sanitary_pads_s_badge_white.jpg'));

  // Apply Option 2 to sanitary_pads_s.jpg
  await sharp(path.join(publicDir, 'sanitary_pads_s.jpg'))
    .composite([{ input: badgeNavy, top: 725, left: 212 }])
    .toFile(path.join(publicDir, 'sanitary_pads_s_badge_navy.jpg'));

  console.log('Created badge_white and badge_navy test files!');
}

main().catch(console.error);
