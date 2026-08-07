import type { EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema } from '@domain';
import type { CommandCard } from '@classicalmoser/prevail-rules/domain';
import { commandCardSchema } from '@classicalmoser/prevail-rules/domain';
import { z } from 'zod';

/** Schema for the data returned by the `getCommandCards` route. */
const getCurrentCommandCardsDataSchema = z.array(commandCardSchema);

/** Returns all the command cards that are currently legal to play. */
const getCurrentCommandCardsContract: GetRoute<
  EmptyObject,
  EmptyObject,
  CommandCard[]
> = {
  path: '/command-cards/current',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    data: getCurrentCommandCardsDataSchema,
  },
};

export { getCurrentCommandCardsContract };
