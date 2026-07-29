const sharp = require('sharp');

async function processImage(inputPath, outputPath) {
  // Resize/crop square 1024x1024 product image to a 1920x1080 16:9 widescreen banner
  // Since the bottle occupies the middle ~50% of 1024x1024, cropping to 1920x1080 center keeps 100% of the bottle, cap, and table base completely uncropped!
  await sharp(inputPath)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .toFile(outputPath);

  console.log(`Processed 16:9 widescreen banner: ${outputPath}`);
}

async function main() {
  const brainDir = 'C:/Users/User/.gemini/antigravity-ide/brain/e1001ad5-b91d-46e6-97fa-7545a6e5bcc1';
  
  await processImage(
    `${brainDir}/liquid_white_perfect_1785245290745.png`,
    'd:/Project/Vigor-LLP/templates/v3/public/slider_liquid_white_v4.png'
  );

  await processImage(
    `${brainDir}/liquid_yellow_perfect_1785245316733.png`,
    'd:/Project/Vigor-LLP/templates/v3/public/slider_liquid_yellow_v5.png'
  );

  await processImage(
    `${brainDir}/liquid_combined_perfect_1785245346003.png`,
    'd:/Project/Vigor-LLP/templates/v3/public/slider_liquid_combined_v4.png'
  );
}

main().catch(console.error);
