import type { BoundaryConfig } from 'eslint-plugin-import-boundaries';

export const boundaries: BoundaryConfig[] = [
  {
    identifier: '@domain',
    dir: 'domain',
    alias: '@domain',
  },
  {
    identifier: '@contracts',
    dir: 'contracts',
    alias: '@contracts',
    allowImportsFrom: ['@domain'],
  },
];
