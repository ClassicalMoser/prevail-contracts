import type { AssertExact } from './assert-exact';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Path parameters for get-by-id card routes. */
interface GetByIdParams extends Record<string, unknown> {
  /** The UUID of the card to get. */
  id: string;
}

/** Schema for get-by-id card route path parameters. */
const getByIdParamsSchema: z.ZodSchema<GetByIdParams> = z.object({
  id: uuidSchema,
});

// Prevent type drift between the contract and the schema
type _assertExactGetByIdParamsSchema = AssertExact<
  GetByIdParams,
  z.infer<typeof getByIdParamsSchema>
>;

/** Request body for batch get-by-ids card routes. */
interface QueryByIdsBody extends Record<string, unknown> {
  /** The UUIDs of the cards to get. */
  ids: string[];
}

/** Schema for batch get-by-ids card route request bodies. */
const queryByIdsBodySchema: z.ZodSchema<QueryByIdsBody> = z.object({
  ids: z.array(uuidSchema),
});

type _assertExactQueryByIdsBodySchema = AssertExact<
  QueryByIdsBody,
  z.infer<typeof queryByIdsBodySchema>
>;

export type { GetByIdParams, QueryByIdsBody };
export { getByIdParamsSchema, queryByIdsBodySchema };
