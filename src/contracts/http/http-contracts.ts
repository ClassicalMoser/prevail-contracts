import type { Route } from '@domain';
import { armyContracts } from './armies';
import { commandCardContracts } from './command-cards';
import { unitCardContracts } from './unit-cards';

const httpContracts: readonly Route[] = [
  ...commandCardContracts,
  ...unitCardContracts,
  ...armyContracts,
];

export { httpContracts };
