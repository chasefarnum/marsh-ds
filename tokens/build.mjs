#!/usr/bin/env node
/**
 * Token Build Script
 * Runs all three Style Dictionary instances and generates CSS output files.
 *
 * Usage: npm run tokens:build
 */
import { sdPrimitives, sdLight, sdDark } from '../style-dictionary.config.mjs';

await sdPrimitives.buildAllPlatforms();
await sdLight.buildAllPlatforms();
await sdDark.buildAllPlatforms();

console.log('\n✓ Token build complete');
console.log('  → src/app/generated/primitives.css');
console.log('  → src/app/generated/semantic-light.css');
console.log('  → src/app/generated/semantic-dark.css');
console.log('  → tokens/build/  (Figma JSON files)');
