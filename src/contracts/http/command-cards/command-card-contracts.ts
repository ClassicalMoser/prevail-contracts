import type { Route } from '@domain';
import { getCurrentCommandCardsContract } from './get-current-command-cards';
import { getCommandCardByIdContract } from './get-command-card-by-id';
import { createEmptyCommandCardContract } from './create-empty-command-card';
import { createCommandCardVersionContract } from './create-command-card-version';
import { certifyLatestCommandCardVersionsContract } from './certify-latest-command-cardversions';

const commandCardContracts: readonly Route[] = [
  getCurrentCommandCardsContract,
  getCommandCardByIdContract,
  createEmptyCommandCardContract,
  createCommandCardVersionContract,
  certifyLatestCommandCardVersionsContract,
] as const;

export { commandCardContracts };
