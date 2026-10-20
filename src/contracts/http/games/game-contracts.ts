import type { Route } from '@domain';
import { createBotVsBotGameContract } from './create-bot-vs-bot-game';
import { createVsBotGameContract } from './create-vs-bot-game';
import { getBotVsBotGameContract } from './get-bot-vs-bot-game';
import { stepBotVsBotGameContract } from './step-bot-vs-bot-game';

const gameContracts: readonly Route[] = [
  createVsBotGameContract,
  createBotVsBotGameContract,
  getBotVsBotGameContract,
  stepBotVsBotGameContract,
] as const;

export { gameContracts };
