import type { EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema, makeResponseSchema } from '@domain';
import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import { z } from 'zod';

/** Schema for the data returned by the `getCommandCards` route. */
const getCurrentCommandCardsDataSchema = z.array(cardSchema);

/** Returns all the command cards that are currently legal to play. */
const getCurrentCommandCardsContract: GetRoute<
  EmptyObject,
  EmptyObject,
  Card[]
> = {
  path: '/command-cards/current',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    response: makeResponseSchema(getCurrentCommandCardsDataSchema),
  },
};

export { getCurrentCommandCardsContract };
