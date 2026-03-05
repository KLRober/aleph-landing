const fs = require('fs');
const TextToSVG = require('text-to-svg');

// We will use a standard system font or download a font to generate the SVG
// For windows, we can use Arial or Times New Roman
const textToSVG = TextToSVG.loadSync('C:/Windows/Fonts/times.ttf');

const svg = textToSVG.getSVG('ℵ', {
    x: 0,
    y: 0,
    fontSize: 100,
    anchor: 'top',
    attributes: {
        fill: 'white'
    }
});

fs.writeFileSync('./public/aleph.svg', svg);
console.log("SVG generated successfully.");
