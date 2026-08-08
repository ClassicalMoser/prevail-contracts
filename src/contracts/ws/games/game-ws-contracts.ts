import type { WsContract } from '@domain';
import { blackInGameWsContract } from './black-in-game';
import { whiteInGameWsContract } from './white-in-game';

const gameWsContracts: readonly WsContract[] = [
  whiteInGameWsContract,
  blackInGameWsContract,
] as const;

export { gameWsContracts };
