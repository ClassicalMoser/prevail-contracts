import type { AssertExact } from '@domain/utils';
import { uuidSchema } from './uuid';
import { z } from 'zod';

interface CardListItem {
  id: string;
  name: string | null;
  version: string | null;
}

const cardListItemSchemaObject = z.object({
  id: uuidSchema,
  name: z.string().nullable(),
  version: z
    .string()
    .regex(/^\d+\.\d+\.\d+$/u, {
      message: 'Version must be a valid semver string (e.g., 1.0.0, 1.12.35)',
    })
    .nullable(),
});

type CardListItemSchema = z.infer<typeof cardListItemSchemaObject>;

const _assertExactCardListItemSchema: AssertExact<
  CardListItem,
  CardListItemSchema
> = true;

const cardListItemSchema: z.ZodType<CardListItem> = cardListItemSchemaObject;

export type { CardListItem };
export { cardListItemSchema };
