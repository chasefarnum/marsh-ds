import StyleDictionary from 'style-dictionary';

/**
 * Design System — Style Dictionary
 *
 * Source of truth: tokens/primitive/ + tokens/semantic/
 * Output:          src/app/generated/  (imported by globals.css)
 *
 * DO NOT hand-edit files in src/app/generated/.
 * Edit token JSON files and run: npm run tokens:build
 */

// ─── Custom name transform ─────────────────────────────────────────────────

StyleDictionary.registerTransform({
  name: 'name/chef-kebab',
  type: 'name',
  transform: (token) => token.path.join('-'),
});

// Semantic tokens: strip the "semantic-light-" / "semantic-dark-" prefix
// so they output as "--background", "--foreground", etc.
StyleDictionary.registerTransform({
  name: 'name/chef-semantic',
  type: 'name',
  transform: (token) => {
    const path = [...token.path];
    if (path[0] === 'semantic-light' || path[0] === 'semantic-dark') {
      path.shift();
    }
    return path.join('-');
  },
});

StyleDictionary.registerTransformGroup({
  name: 'chef-primitive',
  transforms: [
    'name/chef-kebab',
    'color/css',
    'fontFamily/css',
    'cubicBezier/css',
    'time/seconds',
    'shadow/css/shorthand',
  ],
});

StyleDictionary.registerTransformGroup({
  name: 'chef-semantic',
  transforms: [
    'name/chef-semantic',
    'color/css',
    'fontFamily/css',
    'cubicBezier/css',
    'time/seconds',
    'shadow/css/shorthand',
  ],
});

// ─── Custom formats ────────────────────────────────────────────────────────

StyleDictionary.registerFormat({
  name: 'css/chef-theme',
  format: ({ dictionary }) => {
    const vars = dictionary.allTokens
      .map(t => `  --${t.name}: ${t.$value ?? t.value};`)
      .join('\n');
    return `/* AUTO-GENERATED — run npm run tokens:build to update */\n@theme inline {\n${vars}\n}\n`;
  },
});

StyleDictionary.registerFormat({
  name: 'css/chef-root',
  format: ({ dictionary }) => {
    const vars = dictionary.allTokens
      .map(t => `  --${t.name}: ${t.$value ?? t.value};`)
      .join('\n');
    return `/* AUTO-GENERATED — run npm run tokens:build to update */\n:root {\n${vars}\n}\n`;
  },
});

StyleDictionary.registerFormat({
  name: 'css/chef-dark',
  format: ({ dictionary }) => {
    const vars = dictionary.allTokens
      .map(t => `  --${t.name}: ${t.$value ?? t.value};`)
      .join('\n');
    return `/* AUTO-GENERATED — run npm run tokens:build to update */\n.dark {\n${vars}\n}\n`;
  },
});

// ─── Build: Primitives ─────────────────────────────────────────────────────

const sdPrimitives = new StyleDictionary({
  source: ['tokens/primitive/**/*.tokens.json'],
  platforms: {
    primitives: {
      transformGroup: 'chef-primitive',
      files: [
        {
          destination: 'src/app/generated/primitives.css',
          format: 'css/chef-theme',
        },
      ],
    },
    figma: {
      transformGroup: 'chef-primitive',
      files: [
        {
          destination: 'tokens/build/primitives.tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

// ─── Build: Semantic Light ─────────────────────────────────────────────────

const sdLight = new StyleDictionary({
  source: ['tokens/primitive/**/*.tokens.json'],
  include: ['tokens/semantic/light.tokens.json'],
  platforms: {
    semanticLight: {
      transformGroup: 'chef-semantic',
      files: [
        {
          destination: 'src/app/generated/semantic-light.css',
          format: 'css/chef-root',
          filter: (token) => token.filePath.includes('light'),
        },
      ],
    },
    figmaLight: {
      transformGroup: 'chef-semantic',
      files: [
        {
          destination: 'tokens/build/semantic-light.tokens.json',
          format: 'json/nested',
          filter: (token) => token.filePath.includes('light'),
        },
      ],
    },
  },
});

// ─── Build: Semantic Dark ──────────────────────────────────────────────────

const sdDark = new StyleDictionary({
  source: ['tokens/primitive/**/*.tokens.json'],
  include: ['tokens/semantic/dark.tokens.json'],
  platforms: {
    semanticDark: {
      transformGroup: 'chef-semantic',
      files: [
        {
          destination: 'src/app/generated/semantic-dark.css',
          format: 'css/chef-dark',
          filter: (token) => token.filePath.includes('dark'),
        },
      ],
    },
    figmaDark: {
      transformGroup: 'chef-semantic',
      files: [
        {
          destination: 'tokens/build/semantic-dark.tokens.json',
          format: 'json/nested',
          filter: (token) => token.filePath.includes('dark'),
        },
      ],
    },
  },
});

// Export all three instances
export { sdPrimitives, sdLight, sdDark };
export default { sdPrimitives, sdLight, sdDark };
