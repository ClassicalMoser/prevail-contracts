import type { EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema } from '@domain';
import type { UnitType } from '@classicalmoser/prevail-rules/domain';
import { unitTypeSchema } from '@classicalmoser/prevail-rules/domain';
import { z } from 'zod';

/** Schema for the data returned by the `getUnitCards` route. */
const getCurrentUnitCardsDataSchema = z.array(unitTypeSchema);

/** Returns all the unit cards that are currently legal to play. */
const getCurrentUnitCardsContract: GetRoute<
  EmptyObject,
  EmptyObject,
  UnitType[]
> = {
  path: '/unit-cards/current',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    data: getCurrentUnitCardsDataSchema,
  },
};

export { getCurrentUnitCardsContract };
