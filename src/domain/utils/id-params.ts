import type { AssertExact } from './assert-exact';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Parameters for the `getCommandCardById` route. */
interface GetByIdParams extends Record<string, unknown> {
  /** The UUID of the command card to get. */
  id: string;
}

/** Schema for the parameters of the `getCommandCardById` route. */
const getByIdParamsSchema: z.ZodSchema<GetByIdParams> = z.object({
  id: uuidSchema,
});

// Prevent type drift between the contract and the schema
type _assertExactCommandCardByIdParamsSchema = AssertExact<
  GetByIdParams,
  z.infer<typeof getByIdParamsSchema>
>;

export type { GetByIdParams };
export { getByIdParamsSchema };
