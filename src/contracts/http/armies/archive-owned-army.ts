import type { DeleteRoute, EmptyObject, GetByIdParams } from '@domain';
import { emptyObjectSchema, getByIdParamsSchema } from '@domain';

/**
 * Archives an owned army for the authenticated player.
 * Success is HTTP 204 with no response body.
 */
const archiveOwnedArmyContract: DeleteRoute<GetByIdParams, EmptyObject> = {
  path: '/armies/id/:id',
  auth: {
    authRequired: true,
    permissionsRequired: ['armies:archive-owned-army'],
  },
  method: 'DELETE',
  validators: {
    params: getByIdParamsSchema,
    query: emptyObjectSchema,
  },
};

export { archiveOwnedArmyContract };
