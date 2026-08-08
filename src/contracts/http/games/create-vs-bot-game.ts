import type {
  CreateVsBotGameBody,
  CreatedPostRoute,
  EmptyObject,
} from '@domain';
import {
  createVsBotGameBodySchema,
  emptyObjectSchema,
  uuidSchema,
} from '@domain';

/**
 * Creates a human-vs-bot game for the authenticated player.
 * Returns the new game id — connect via the matching seat WebSocket.
 */
const createVsBotGameContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  CreateVsBotGameBody,
  string
> = {
  path: '/games/vs-bot',
  auth: {
    authRequired: true,
    permissionsRequired: ['game:play'],
  },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: createVsBotGameBodySchema,
    data: uuidSchema,
  },
};

export { createVsBotGameContract };
