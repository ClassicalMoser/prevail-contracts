import type { Route } from '@domain';
import { createVsBotGameContract } from './create-vs-bot-game';

const gameContracts: readonly Route[] = [createVsBotGameContract] as const;

export { gameContracts };
