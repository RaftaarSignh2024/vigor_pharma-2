const fs = require('fs');

const brainDir = 'C:/Users/User/.gemini/antigravity-ide/brain/e1001ad5-b91d-46e6-97fa-7545a6e5bcc1';
const targetDir = 'd:/Project/Vigor-LLP/templates/v3/public';

fs.copyFileSync(
  `${brainDir}/diapers_pro_package_1785253237264.png`,
  `${targetDir}/slider_baby_diapers_new.png`
);

fs.copyFileSync(
  `${brainDir}/pads_pro_package_v2_1785253314247.png`,
  `${targetDir}/slider_sanitary_pads_new.png`
);

console.log('Applied professional package images to public folder successfully!');
