#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Create the icons directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
const iconsDir = path.join(publicDir, 'icons');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Helper function to create SVG
function createSvg(size, text, bgColor = '#3b82f6', textColor = 'white') {
  const fontSize = Math.floor(size / 3);
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${bgColor}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}px" font-weight="bold" fill="${textColor}">
    ${text}
  </text>
</svg>`;
}

// Generate favicon.ico placeholder
// This is just a simple SVG - in production you'd want to convert to ICO format
console.log('Generating favicon placeholder...');
fs.writeFileSync(
  path.join(publicDir, 'favicon.svg'),
  createSvg(32, 'MW', '#3b82f6', 'white')
);

// Generate apple-icon.png placeholder
console.log('Generating Apple icon placeholder...');
fs.writeFileSync(
  path.join(publicDir, 'apple-icon.svg'),
  createSvg(180, 'MW', '#3b82f6', 'white')
);

// Generate safari-pinned-tab.svg
console.log('Generating Safari pinned tab icon...');
fs.writeFileSync(
  path.join(publicDir, 'safari-pinned-tab.svg'),
  createSvg(512, 'MW', 'black', 'white')
);

// Generate standard icons
console.log('Generating standard icons...');
fs.writeFileSync(
  path.join(publicDir, 'icon-16x16.svg'),
  createSvg(16, 'M', '#3b82f6', 'white')
);
fs.writeFileSync(
  path.join(publicDir, 'icon-32x32.svg'),
  createSvg(32, 'M', '#3b82f6', 'white')
);
fs.writeFileSync(
  path.join(iconsDir, 'icon-192x192.svg'),
  createSvg(192, 'MW', '#3b82f6', 'white')
);
fs.writeFileSync(
  path.join(iconsDir, 'icon-512x512.svg'),
  createSvg(512, 'MW', '#3b82f6', 'white')
);

// Generate maskable icons
console.log('Generating maskable icons...');
// Maskable icons need padding - reduce the text size
fs.writeFileSync(
  path.join(iconsDir, 'icon-maskable-192x192.svg'),
  createSvg(192, 'MW', '#3b82f6', 'white')
);
fs.writeFileSync(
  path.join(iconsDir, 'icon-maskable-512x512.svg'),
  createSvg(512, 'MW', '#3b82f6', 'white')
);

console.log('Icon placeholders generated successfully!');
console.log('');
console.log('NOTE: These are SVG placeholders. For production:');
console.log('1. Replace these with properly sized PNG/ICO files');
console.log('2. For favicon.ico, use a proper ICO file with multiple sizes');
console.log('3. Update the manifest.json file with the correct paths');

