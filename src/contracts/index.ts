import type { Route } from '@domain';
import { httpContracts } from './http';

export {
  getCurrentCommandCardsContract,
  getCommandCardByIdContract,
} from './http';

/** All registered HTTP route contracts. */
export const CONTRACTS: readonly Route[] = [...httpContracts];
