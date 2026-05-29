import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...js.configs.recommended,
  },
];

import prettierConfig from 'eslint-config-prettier';

export default [
  {
    // ESLint reeglid
  },
  prettierConfig, // peab olema viimane!
];