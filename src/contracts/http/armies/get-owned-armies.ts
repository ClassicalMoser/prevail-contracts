import type { Army } from '@classicalmoser/prevail-rules/domain';
import { armySchema } from '@classicalmoser/prevail-rules/domain';
import type { EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema } from '@domain';
import { z } from 'zod';

/** Returns all owned armies for the authenticated player. */
const getOwnedArmiesContract: GetRoute<EmptyObject, EmptyObject, Army[]> = {
  path: '/armies',
  auth: { authRequired: true, permissionsRequired: [] },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    data: z.array(armySchema),
  },
};

export { getOwnedArmiesContract };
