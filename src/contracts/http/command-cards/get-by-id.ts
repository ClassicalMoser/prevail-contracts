import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import type { GetByIdParams, EmptyObject, GetRoute } from '@domain';
import { getByIdParamsSchema, emptyObjectSchema } from '@domain';

/** Returns the current version of a command card by the card's ID. */
const getCommandCardByIdContract: GetRoute<GetByIdParams, EmptyObject, Card> = {
  path: '/command-cards/:id',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: getByIdParamsSchema,
    query: emptyObjectSchema,
    data: cardSchema,
  },
};

export { getCommandCardByIdContract };
