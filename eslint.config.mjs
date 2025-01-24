import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    // Додайте базові налаштування, якщо потрібно
  },
});

const eslintConfig = [
  {
    ignores: [
      '.next',
      '.cache',
      'package-lock.json',
      'public',
      'node_modules',
      'next-env.d.ts',
      'next.config.ts',
      'yarn.lock',
    ],
  },
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'tailwindcss', 'prettier'],
    rules: {
      'no-undef': 'off',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'tailwindcss/classnames-order': 'off', // Відключає лише перевірку порядку
      'tailwindcss/no-custom-classname': 'error', // Залишається для перевірки валідності
    },
  }),
];

export default eslintConfig;
