import type { CreatedPostRoute, EmptyObject } from '@domain';
import { emptyObjectSchema, uuidSchema } from '@domain';

/**
 * Creates a new owned army for the authenticated player.
 * Returns the new army id — fetch via GET for the read model.
 */
const createOwnedArmyContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  string
> = {
  path: '/armies',
  auth: {
    authRequired: true,
    permissionsRequired: ['armies:create-owned-army'],
  },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: uuidSchema,
  },
};

export { createOwnedArmyContract };
