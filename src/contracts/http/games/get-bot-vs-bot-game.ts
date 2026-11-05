import type { GameForVisibility } from '@classicalmoser/prevail-rules/domain';
import { legalAuthoritativeGameSchema } from '@classicalmoser/prevail-rules/domain';
import type { EmptyObject, GameWsParams, GetRoute } from '@domain';
import { emptyObjectSchema, gameWsParamsSchema } from '@domain';

/**
 * Returns the current authoritative bot-vs-bot game.
 * Refresh only — does not play a choice.
 * Unknown game, including one that is not bot-vs-bot, is 404.
 * A caller who did not create it is 403.
 */
const getBotVsBotGameContract: GetRoute<
  GameWsParams,
  EmptyObject,
  GameForVisibility<'authoritative'>
> = {
  path: '/games/bot-vs-bot/id/:gameId',
  auth: {
    authRequired: true,
    permissionsRequired: ['game:play'],
  },
  method: 'GET',
  validators: {
    params: gameWsParamsSchema,
    query: emptyObjectSchema,
    data: legalAuthoritativeGameSchema,
  },
};

export { getBotVsBotGameContract };
