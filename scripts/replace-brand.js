const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exts = new Set(['.js', '.jsx', '.tsx', '.ts', '.json', '.md', '.css', '.mjs']);
const skipDirs = new Set(['node_modules', '.next', '.git', 'out', 'build']);

// Replacement rules
const rules = [
  { from: /Daily\s*Mode/gi, to: (m) => preserveCase(m, 'Code Promise') },
  { from: /Code Promise/g, to: 'Code Promise' },
  { from: /code-promise/gi, to: (m) => preserveCase(m, 'code-promise') },
  { from: /code promise/gi, to: (m) => preserveCase(m, 'code promise') },
];

function preserveCase(source, target) {
  // If fully uppercase
  if (source === source.toUpperCase()) return target.toUpperCase();
  // If capitalized (title-like)
  if (source[0] === source[0].toUpperCase()) return target.replace(/\b\w/g, (c) => c.toUpperCase());
  // Default lower
  return target.toLowerCase();
}

function transformFile(filePath, content) {
  let changed = false;
  let updated = content;

  for (const r of rules) {
    updated = updated.replace(r.from, (...args) => {
      const match = args[0];
      const replacement = typeof r.to === 'function' ? r.to(match) : r.to;
      if (replacement !== match) changed = true;
      return replacement;
    });
  }

  // Special-case package.json name field: change slug
  if (path.basename(filePath) === 'package.json') {
    try {
      const pkg = JSON.parse(updated);
      if (typeof pkg.name === 'string') {
        const newName = pkg.name
          .replace(/daily[- ]?mode/gi, 'code-promise')
          .replace(/Daily[- ]?Mode/g, 'code-promise');
        if (newName !== pkg.name) {
          pkg.name = newName;
          updated = JSON.stringify(pkg, null, 2) + '\n';
          changed = true;
        }
      }
    } catch (_) {
      // ignore JSON parse errors for non-standard files
    }
  }

  return { changed, updated };
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
      const { changed, updated } = transformFile(filePath, original);
      if (changed) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log('Updated', path.relative(root, filePath));
      }
    }
  }
}

walk(root);
console.log('Brand replacement completed.');
