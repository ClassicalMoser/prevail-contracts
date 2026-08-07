import type { Army } from '@classicalmoser/prevail-rules/domain';
import { armySchema } from '@classicalmoser/prevail-rules/domain';
import type { EmptyObject, GetByIdParams, GetRoute } from '@domain';
import { emptyObjectSchema, getByIdParamsSchema } from '@domain';

/** Returns an owned army by id for the authenticated player. */
const getOwnedArmyByIdContract: GetRoute<GetByIdParams, EmptyObject, Army> = {
  path: '/armies/id/:id',
  auth: { authRequired: true, permissionsRequired: [] },
  method: 'GET',
  validators: {
    params: getByIdParamsSchema,
    query: emptyObjectSchema,
    data: armySchema,
  },
};

export { getOwnedArmyByIdContract };
