import type { Route } from '@domain';
import { getCurrentCommandCardsContract } from './get-current-command-cards';
import { getCommandCardByIdContract } from './get-by-id';

const commandCardContracts: readonly Route[] = [
  getCurrentCommandCardsContract,
  getCommandCardByIdContract,
];

export { commandCardContracts };
