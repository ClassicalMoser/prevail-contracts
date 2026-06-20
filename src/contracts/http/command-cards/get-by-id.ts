import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import type { AssertExact, EmptyObject, GetRoute } from '@domain';
import { emptyObjectSchema, makeResponseSchema, uuidSchema } from '@domain';
import { z } from 'zod';

/** Parameters for the `getCommandCardById` route. */
interface GetCommandCardByIdParams extends Record<string, unknown> {
  /** The UUID of the command card to get. */
  id: string;
}

/** Schema for the parameters of the `getCommandCardById` route. */
const getCommandCardByIdParamsSchema = z.object({ id: uuidSchema });

// Prevent type drift between the contract and the schema
type _assertExactCommandCardByIdParamsSchema = AssertExact<
  GetCommandCardByIdParams,
  z.infer<typeof getCommandCardByIdParamsSchema>
>;

/** Returns the current version of a command card by the card's ID. */
const getCommandCardByIdContract: GetRoute<
  GetCommandCardByIdParams,
  EmptyObject,
  Card
> = {
  path: '/command-cards/:id',
  auth: { authRequired: false },
  method: 'GET',
  validators: {
    params: getCommandCardByIdParamsSchema,
    query: emptyObjectSchema,
    response: makeResponseSchema(cardSchema),
  },
};

export type { GetCommandCardByIdParams };
export { getCommandCardByIdContract };
