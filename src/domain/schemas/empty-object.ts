import type { AssertExact } from '@domain/utils';

import { z } from 'zod';

/** An object with no properties. Used for routes with no params or query. */
type EmptyObject = Record<string, never>;

const _emptyObjectSchemaObject = z.object({});

type EmptyObjectSchemaType = z.infer<typeof _emptyObjectSchemaObject>;

/** Runtime validator for {@link EmptyObject}. */
export const emptyObjectSchema: z.ZodType<EmptyObject> =
  _emptyObjectSchemaObject;

const _assertExactEmptyObject: AssertExact<EmptyObject, EmptyObjectSchemaType> =
  true;

export type { EmptyObject };
