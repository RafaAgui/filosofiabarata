import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const pagefindOutput = resolve(projectRoot, 'dist', 'pagefind');
const vercelOutput = resolve(projectRoot, '.vercel', 'output', 'static', 'pagefind');

cpSync(pagefindOutput, vercelOutput, { recursive: true });
