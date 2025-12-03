const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const svgPath = path.join(__dirname, '../src/assets/logo.svg');
const publicDir = path.join(__dirname, '../public');

async function generateLogos() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, `logo${size}.png`));
      
      console.log(`Generated logo${size}.png`);
    }

    // Also generate favicon.ico
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('Generated favicon.ico');
  } catch (error) {
    console.error('Error generating logos:', error);
  }
}

generateLogos(); 