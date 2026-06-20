import type { Route } from '@domain';

import { getCommandCardsContract } from './http';

export { getCommandCardsContract } from './http';

/** All registered HTTP route contracts. */
export const CONTRACTS: readonly Route[] = [getCommandCardsContract];
