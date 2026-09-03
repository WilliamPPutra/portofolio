// One-off capture of the Kafanku storefront for the Projects page.
//
// Playwright is deliberately NOT a dependency, so `npm ci` on the deploy
// workflow stays lean. To re-shoot after the store changes:
//
//   npm i -D playwright && node scripts/shoot-store.mjs && npm uninstall playwright
//
// It drives the copy of Chrome already installed on the machine, then writes
// full-page PNGs into public/media. Crop and convert those to .webp afterwards;
// the page expects 1560x1300 files named store-home / store-product /
// store-checkout.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const OUT = 'public/media';
const SHOTS = [
  { file: 'store-home.png', url: 'https://pusatkainkafan.com/' },
  { file: 'store-product.png', url: 'https://pusatkainkafan.com/products/paket-kafanku-premium' },
  { file: 'store-checkout.png', url: 'https://pusatkainkafan.com/checkout/paket-kafanku-premium' },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 950 },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
});
const page = await ctx.newPage();

for (const shot of SHOTS) {
  try {
    await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 60000 });
  } catch {
    await page.goto(shot.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  // Pull the whole page past the viewport so lazy images decode, then return.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);

  const box = await page.evaluate(() => ({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
    title: document.title,
  }));

  await page.screenshot({ path: `${OUT}/${shot.file}`, fullPage: true });
  console.log(`${shot.file}  ${box.w}x${box.h}  "${box.title}"`);
}

await browser.close();
