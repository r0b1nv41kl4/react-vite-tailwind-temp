import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...js.configs.recommended,
  },
  {
    // ESLint reeglid
  },
  prettierConfig, // peab olema viimane!
];
