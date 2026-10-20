import type { GameForVisibility } from '@classicalmoser/prevail-rules/domain';
import { authoritativeGameSchema } from '@classicalmoser/prevail-rules/domain';
import type {
  CreateBotVsBotGameBody,
  CreatedPostRoute,
  EmptyObject,
} from '@domain';
import { createBotVsBotGameBodySchema, emptyObjectSchema } from '@domain';

/**
 * Creates a bot-vs-bot game for the authenticated player.
 * Returns the authoritative opening game. No choice has been played.
 * Both army ids must be owned by the caller; that check stays in the use case.
 */
const createBotVsBotGameContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  CreateBotVsBotGameBody,
  GameForVisibility<'authoritative'>
> = {
  path: '/games/bot-vs-bot',
  auth: {
    authRequired: true,
    permissionsRequired: ['game:play'],
  },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: createBotVsBotGameBodySchema,
    data: authoritativeGameSchema,
  },
};

export { createBotVsBotGameContract };
