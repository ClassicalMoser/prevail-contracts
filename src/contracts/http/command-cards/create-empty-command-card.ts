import type { CreatedPostRoute, EmptyObject } from '@domain';
import { emptyObjectSchema, uuidSchema } from '@domain';

/**
 * Creates a new command card entity with no associated version.
 * Returns the ID of the created card.
 */
const createEmptyCommandCardContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  string
> = {
  path: '/command-cards',
  auth: { authRequired: true, permissionsRequired: ['cards:create-card'] },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: uuidSchema,
  },
};

export { createEmptyCommandCardContract };
