/* eslint-disable space-in-parens */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Add spaces inside curly braces
      // 'object-curly-spacing': ['error', 'always'],

      // Allow single quotes
      'quotes': ['error', 'single'],

      // Add spaces inside brackets
      // 'array-bracket-spacing': [ 'error', 'always' ],

      // Add spaces inside parentheses (optional)
      // 'space-in-parens': ['error', 'always'],

      // Add space after commas
      'comma-spacing': ['error', { 'before': false, 'after': true }],

      // Consistent spacing in computed properties
      'computed-property-spacing': ['error', 'always'],
    }
  }
];

export default eslintConfig;
