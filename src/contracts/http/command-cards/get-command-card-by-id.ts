import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
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

/** Returns the current version of a command card by the card's ID. */
const getCommandCardByIdContract: GetRoute<GetByIdParams, EmptyObject, Card> = {
  path: '/command-cards/id/:id',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: getByIdParamsSchema,
    query: emptyObjectSchema,
    data: cardSchema,
  },
};

/** Returns the current versions of command cards by the card's IDs. */
const getCommandCardsByIdsContract: PostRoute<
  EmptyObject,
  EmptyObject,
  QueryByIdsBody,
  Card[]
> = {
  path: '/command-cards/by-ids',
  auth: { authRequired: false },
  method: 'POST',
  successStatus: 200,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: queryByIdsBodySchema,
    data: z.array(cardSchema),
  },
};

export { getCommandCardByIdContract, getCommandCardsByIdsContract };
