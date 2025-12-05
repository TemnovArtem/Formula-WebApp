
import globals from 'globals';
// ... existing imports ...
import cypress from 'eslint-plugin-cypress/flat'; // Додайте цей імпорт

import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([

  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    ...cypress.config.recommended,

    languageOptions: {
      ecmaVersion: 2020,
      globals: {
          ...globals.cypress,
          cypress: true,
          Cypress: true,


      }
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
