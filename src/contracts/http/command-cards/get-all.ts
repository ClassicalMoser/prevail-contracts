import type { CardListItem, EmptyObject, GetRoute } from '@domain';
import { cardListItemSchema, emptyObjectSchema } from '@domain';
import { z } from 'zod';

const getAllCommandCardsContract: GetRoute<
  EmptyObject,
  EmptyObject,
  CardListItem[]
> = {
  path: '/command-cards/all',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    data: z.array(cardListItemSchema),
  },
};

export type { CardListItem };
export { getAllCommandCardsContract, cardListItemSchema };
