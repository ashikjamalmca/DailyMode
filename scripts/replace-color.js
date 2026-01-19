const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exts = new Set(['.js', '.jsx', '.tsx', '.css', '.mjs']);
const skipDirs = new Set(['node_modules', '.next', '.git', 'out', 'build']);

const OLD_HEX = '#FFF58A';
const NEW_HEX = '#FFF58A';

// Regex to convert arbitrary Tailwind color classes to token-based classes
// e.g., bg-daily-yellow/20 -> bg-daily-yellow/20
//       text-daily-yellow   -> text-daily-yellow
//       border-daily-yellow/10 -> border-daily-yellow/10
const twArbitraryColor = new RegExp('(bg|text|border)-\\[#FFF58A\\](\\/[0-9]{1,3})?', 'g');

function transform(content) {
  let changed = false;
  const replacedClasses = content.replace(twArbitraryColor, (_, p1, p2 = '') => {
    changed = true;
    return `${p1}-daily-yellow${p2 || ''}`;
  });

  // Also replace any remaining literal hex (e.g., inline styles) with the new hex
  const replacedHex = replacedClasses.replace(new RegExp(OLD_HEX, 'g'), () => {
    changed = true;
    return NEW_HEX;
  });

  return { content: replacedHex, changed };
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else {
      const ext = path.extname(entry.name);
      if (!exts.has(ext)) continue;
      const filePath = path.join(dir, entry.name);
      const original = fs.readFileSync(filePath, 'utf8');
      const { content, changed } = transform(original);
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', path.relative(root, filePath));
      }
    }
  }
}

walk(root);
console.log('Color replacement completed.');
