import path from 'node:path';
import { defineConfig } from 'vitest/config';

const __dirname = import.meta.dirname;

export default defineConfig({
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@contracts': path.resolve(__dirname, 'src/contracts'),
    },
  },
  test: {
    coverage: {
      // Exclude build output and node_modules
      exclude: [
        // Exclude build output
        'dist/**/*.{js,ts}',
        // Exclude barrel files
        '**/index.{js,ts}',
      ],
      // Only run coverage on testable files in the domain folder
      include: ['src/domain/**/*.{js,ts}'],
      provider: 'v8',
    },
    exclude: ['dist/**', 'node_modules/**'],
    globals: true,
    include: [
      'src/domain/**/*.test.{js,ts}',
      'src/contracts/**/*.test.{js,ts}',
    ],
    watch: false,
  },
});
