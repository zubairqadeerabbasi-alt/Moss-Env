import { Jimp } from 'jimp';

async function main() {
  const image = await Jimp.read('src/assets/images/cert_icv.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  const replaceColor = 0x00000000;

  const queue = [{ x: 0, y: 0 }];
  const visited = new Set();
  
  for (let x = 0; x < width; x++) {
    queue.push({ x, y: 0 });
    queue.push({ x, y: height - 1 });
  }
  for (let y = 0; y < height; y++) {
    queue.push({ x: 0, y });
    queue.push({ x: width - 1, y });
  }

  function checkAndQueue(x, y) {
    if (x >= 0 && x < width && y >= 0 && y < height) {
      const key = `${x},${y}`;
      if (!visited.has(key)) {
        visited.add(key);
        const color = image.getPixelColor(x, y);
        const r = (color >>> 24) & 0xff;
        const g = (color >>> 16) & 0xff;
        const b = (color >>> 8) & 0xff;
        const a = color & 0xff;
        
        if (r > 240 && g > 240 && b > 240 && a > 200) {
          queue.push({ x, y });
        }
      }
    }
  }

  while (queue.length > 0) {
    const { x, y } = queue.shift();
    const color = image.getPixelColor(x, y);
    const r = (color >>> 24) & 0xff;
    const g = (color >>> 16) & 0xff;
    const b = (color >>> 8) & 0xff;
    const a = color & 0xff;
    
    if (r > 240 && g > 240 && b > 240 && a > 200) {
      image.setPixelColor(replaceColor, x, y);
      checkAndQueue(x + 1, y);
      checkAndQueue(x - 1, y);
      checkAndQueue(x, y + 1);
      checkAndQueue(x, y - 1);
    }
  }

  await image.write('src/assets/images/cert_icv_trans.png');
  console.log('Done creating transparent ICV logo.');
}

main().catch(console.error);
