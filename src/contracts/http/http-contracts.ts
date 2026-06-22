import type { Route } from '@domain';
import { commandCardContracts } from './command-cards';
import { unitCardContracts } from './unit-cards';

const httpContracts: readonly Route[] = [
  ...commandCardContracts,
  ...unitCardContracts,
];

export { httpContracts };
