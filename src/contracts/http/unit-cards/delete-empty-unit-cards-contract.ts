import type { DeleteRoute, EmptyObject } from '@domain';
import { emptyObjectSchema } from '@domain';

/**
 * Deletes all unit cards with no associated version.
 */
const deleteEmptyUnitCardsContract: DeleteRoute<EmptyObject, EmptyObject> = {
  path: '/unit-cards/empty',
  auth: { authRequired: true, permissionsRequired: ['cards:delete-card'] },
  method: 'DELETE',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
  },
};

export { deleteEmptyUnitCardsContract };
