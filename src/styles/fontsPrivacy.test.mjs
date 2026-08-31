import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import test from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const publicFontsDir = resolve(here, '../../public/fonts');
const expectedFonts = [
  'dm-sans-normal-latin.woff2',
  'dm-sans-normal-latin-ext.woff2',
  'dm-sans-italic-latin.woff2',
  'dm-sans-italic-latin-ext.woff2',
];

test('docs self-host DM Sans without Google font requests', () => {
  const css = readFileSync(resolve(here, 'fonts.css'), 'utf8');
  assert.doesNotMatch(css, /fonts\.(?:googleapis|gstatic)\.com/i);
  for (const fileName of expectedFonts) {
    const filePath = resolve(publicFontsDir, fileName);
    assert.equal(existsSync(filePath), true, fileName);
    assert.ok(statSync(filePath).size > 1_000, fileName);
    assert.match(css, new RegExp(`/fonts/${fileName.replace('.', '\\.')}\\b`));
  }
});
