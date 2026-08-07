import type { Army } from '@classicalmoser/prevail-rules/domain';
import {
  armySchema,
  commandCardSchema,
  unitCountSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import { z } from 'zod';

/**
 * PUT body for an owned army: composition only.
 * Identity is the route `:id`, not a field on the command.
 */
type ArmyWriteBody = Omit<Army, 'id'>;

/** Placeholder so we can reuse {@link armySchema} uniqueness refinements. */
const ARMY_ID_PLACEHOLDER = '00000000-0000-4000-8000-000000000000';

const armyWriteBodySchemaObject = z
  .object({
    units: z.array(unitCountSchema),
    commandCards: z.array(commandCardSchema),
  })
  .superRefine((body, ctx) => {
    const result = armySchema.safeParse({
      id: ARMY_ID_PLACEHOLDER,
      ...body,
    });
    if (result.success) {
      return;
    }
    for (const issue of result.error.issues) {
      if (issue.path[0] === 'id') {
        continue;
      }
      ctx.addIssue({
        code: 'custom',
        message: issue.message,
        path: issue.path,
      });
    }
  });

type ArmyWriteBodySchema = z.infer<typeof armyWriteBodySchemaObject>;

const _assertExactArmyWriteBody: AssertExact<
  ArmyWriteBody,
  ArmyWriteBodySchema
> = true;

const armyWriteBodySchema: z.ZodType<ArmyWriteBody> = armyWriteBodySchemaObject;

export type { ArmyWriteBody };
export { armyWriteBodySchema };
