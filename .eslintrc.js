module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 8, sourceType: 'module', project: './tsconfig.json' }, // to enable features such as async/await
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'prettier/@typescript-eslint', // Prettier plugin
    'plugin:prettier/recommended', // Prettier recommended rules
  ],
  settings: { react: { version: 'detect' } },
  files: ['**/*.ts', '**/*.tsx'],
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  rules: {
    'react/prop-types': 'off', // We will use TypeScript's types for component props instead
    'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
    '@typescript-eslint/no-unused-vars': ['error'], // Why would you want unused vars?
    '@typescript-eslint/explicit-function-return-type': [
      // I suggest this setting for requiring return types on functions only where useful
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
  },
}
