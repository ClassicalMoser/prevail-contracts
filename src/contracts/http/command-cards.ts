import type { EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema, makeResponseSchema } from '@domain';
import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import { z } from 'zod';

/** Schema for the data returned by the `getCommandCards` route. */
const getCommandCardsDataSchema = z.array(cardSchema);

/** Returns all command cards in the game. */
const getCommandCardsContract: GetRoute<EmptyObject, EmptyObject, Card[]> = {
  path: '/command-cards',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    returnData: getCommandCardsDataSchema,
    response: makeResponseSchema(getCommandCardsDataSchema),
  },
};

export { getCommandCardsContract };
