
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
export default defineConfig({
  ignores: ['node_modules/'],
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: {
    globals: { ...globals.browser, ...globals.node },
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended', 
    'plugin:prettier/recommended', 
  ],
  plugins: ['prettier'], 
  rules: {},
});






