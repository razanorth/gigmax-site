import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const sourcePitch = path.join(repoRoot, 'pitch');
const destPitch = path.resolve(__dirname, '..', 'public', 'pitch');

if (!existsSync(sourcePitch)) {
  console.error(`[sync-pitch] source not found: ${sourcePitch}`);
  process.exit(1);
}

rmSync(destPitch, { recursive: true, force: true });
mkdirSync(path.dirname(destPitch), { recursive: true });

cpSync(sourcePitch, destPitch, {
  recursive: true,
  filter: (src) => !src.split(path.sep).some((part) => part === '.DS_Store' || part === 'node_modules'),
});

console.log(`[sync-pitch] copied ${sourcePitch} -> ${destPitch}`);
