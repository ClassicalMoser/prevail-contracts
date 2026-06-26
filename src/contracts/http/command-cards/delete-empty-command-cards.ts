import type { DeleteRoute, EmptyObject } from '@domain';
import { emptyObjectSchema } from '@domain';

/**
 * Deletes all command cards with no associated version.
 */
const deleteEmptyCommandCardsContract: DeleteRoute<EmptyObject, EmptyObject> = {
  path: '/command-cards/empty',
  auth: { authRequired: true, permissionsRequired: ['cards:delete-card'] },
  method: 'DELETE',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
  },
};

export { deleteEmptyCommandCardsContract };
