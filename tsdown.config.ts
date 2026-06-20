import { defineConfig } from 'tsdown';

export default defineConfig({
  alias: {
    '@contracts': './src/contracts',
    '@domain': './src/domain',
  },
  clean: true,
  entry: ['src/index.ts', 'src/domain/index.ts', 'src/contracts/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  outExtensions: () => ({
    dts: '.d.ts',
    js: '.js',
  }),
  sourcemap: false,
  unbundle: false,
});
