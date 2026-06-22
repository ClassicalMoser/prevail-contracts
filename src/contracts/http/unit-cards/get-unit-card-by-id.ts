import type { UnitType } from '@classicalmoser/prevail-rules/domain';
import { unitTypeSchema } from '@classicalmoser/prevail-rules/domain';
import type {
  GetByIdParams,
  EmptyObject,
  GetRoute,
  QueryByIdsBody,
  PostRoute,
} from '@domain';
import {
  getByIdParamsSchema,
  emptyObjectSchema,
  queryByIdsBodySchema,
} from '@domain';
import { z } from 'zod';

/** Returns the current version of a unit card by the card's ID. */
const getUnitCardByIdContract: GetRoute<GetByIdParams, EmptyObject, UnitType> =
  {
    path: '/unit-cards/id/:id',
    auth: { authRequired: false },
    method: 'GET',
    validators: {
      params: getByIdParamsSchema,
      query: emptyObjectSchema,
      data: unitTypeSchema,
    },
  };

/** Returns the current versions of unit cards by the card's IDs. */
const getUnitCardsByIdsContract: PostRoute<
  EmptyObject,
  EmptyObject,
  QueryByIdsBody,
  UnitType[]
> = {
  path: '/unit-cards/by-ids',
  auth: { authRequired: false },
  method: 'POST',
  successStatus: 200,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: queryByIdsBodySchema,
    data: z.array(unitTypeSchema),
  },
};

export { getUnitCardByIdContract, getUnitCardsByIdsContract };
