import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(/font-bebas/g, 'font-heading uppercase');
content = content.replace(/font-oswald/g, 'font-subheading');
content = content.replace(/font-lato/g, 'font-body');

fs.writeFileSync('src/App.tsx', content);
console.log('Fonts replaced successfully');
