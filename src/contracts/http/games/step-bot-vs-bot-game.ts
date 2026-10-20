import type {
  BotVsBotStepData,
  EmptyObject,
  GameWsParams,
  PostRoute,
} from '@domain';
import {
  botVsBotStepDataSchema,
  emptyObjectSchema,
  gameWsParamsSchema,
} from '@domain';

/**
 * Plays one bot choice for the side the prompt belongs to.
 * The opening choose-card prompt is both seats until one card is in;
 * the use case plays white first. Effects between choices are drained here.
 * Do not retry an in-progress step — a retry plays the next choice.
 * Unknown game, including one that is not bot-vs-bot, is 404.
 * A caller who did not create it is 403.
 */
const stepBotVsBotGameContract: PostRoute<
  GameWsParams,
  EmptyObject,
  EmptyObject,
  BotVsBotStepData
> = {
  path: '/games/bot-vs-bot/id/:gameId/step',
  auth: {
    authRequired: true,
    permissionsRequired: ['game:play'],
  },
  method: 'POST',
  successStatus: 200,
  validators: {
    params: gameWsParamsSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: botVsBotStepDataSchema,
  },
};

export { stepBotVsBotGameContract };
