import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'index.html');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

// Wait for fonts and animations
await new Promise(r => setTimeout(r, 1800));

// Make sure slide 1 is active and nothing else is visible
await page.evaluate(() => {
  document.querySelectorAll('.slide').forEach((s, i) => {
    s.style.opacity = i === 0 ? '1' : '0';
    s.style.transform = 'none';
    s.style.pointerEvents = i === 0 ? 'all' : 'none';
  });
  document.querySelector('.nav').style.display = 'none';
  document.querySelector('.slide-counter').style.display = 'none';
});

await new Promise(r => setTimeout(r, 300));

await page.screenshot({
  path: path.join(__dirname, 'assets/og-image.png'),
  clip: { x: 0, y: 0, width: 1200, height: 630 },
  type: 'png',
});

await browser.close();
console.log('og-image.png saved to assets/');
