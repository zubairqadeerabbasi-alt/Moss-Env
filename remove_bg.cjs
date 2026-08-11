const Jimp = require('jimp');

async function main() {
  const image = await Jimp.read('src/assets/images/cert_icv.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // Find the exact color of the top-left pixel (should be white)
  const targetColor = image.getPixelColor(0, 0);

  // We want to replace it with transparent
  const replaceColor = Jimp.rgbaToInt(0, 0, 0, 0);

  const queue = [{ x: 0, y: 0 }];
  const visited = new Set();
  
  // Also queue all border pixels
  for (let x = 0; x < width; x++) {
    queue.push({ x, y: 0 });
    queue.push({ x, y: height - 1 });
  }
  for (let y = 0; y < height; y++) {
    queue.push({ x: 0, y });
    queue.push({ x: width - 1, y });
  }

  // A helper to safely check bounds and color
  function checkAndQueue(x, y) {
    if (x >= 0 && x < width && y >= 0 && y < height) {
      const key = `${x},${y}`;
      if (!visited.has(key)) {
        visited.add(key);
        // Only queue if it matches the background color (or is very close to white)
        const rgba = Jimp.intToRGBA(image.getPixelColor(x, y));
        // Check if it's white or very light grey (sometimes anti-aliasing)
        if (rgba.r > 240 && rgba.g > 240 && rgba.b > 240 && rgba.a > 200) {
          queue.push({ x, y });
        }
      }
    }
  }

  while (queue.length > 0) {
    const { x, y } = queue.shift();
    
    // Check if we need to replace
    const rgba = Jimp.intToRGBA(image.getPixelColor(x, y));
    if (rgba.r > 240 && rgba.g > 240 && rgba.b > 240 && rgba.a > 200) {
      image.setPixelColor(replaceColor, x, y);
      checkAndQueue(x + 1, y);
      checkAndQueue(x - 1, y);
      checkAndQueue(x, y + 1);
      checkAndQueue(x, y - 1);
    }
  }

  await image.writeAsync('src/assets/images/cert_icv_trans.png');
  console.log('Done creating transparent ICV logo.');
}

main().catch(console.error);
