import { Jimp } from 'jimp';

async function main() {
  const image = await Jimp.read('src/assets/images/cert_icv.png');
  const color = image.getPixelColor(0, 0);
  console.log('Top left pixel:', color.toString(16));
}

main().catch(console.error);
