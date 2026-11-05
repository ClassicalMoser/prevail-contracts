import type { Army } from '@classicalmoser/prevail-rules/domain';
import {
  commandCardSchema,
  refineArmyRules,
  unitCountSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import { z } from 'zod';

/**
 * PUT body for an owned army.
 * Identity is the route `:id`. The client sends the display name with the composition.
 */
type ArmyWriteBody = Omit<Army, 'id'>;

const armyWriteBodySchemaObject = z
  .object({
    name: z.string(),
    units: z.array(unitCountSchema),
    commandCards: z.array(commandCardSchema),
  })
  // The rules every army keeps: unit limits, and nothing listed twice.
  .superRefine(refineArmyRules);

type ArmyWriteBodySchema = z.infer<typeof armyWriteBodySchemaObject>;

const _assertExactArmyWriteBody: AssertExact<
  ArmyWriteBody,
  ArmyWriteBodySchema
> = true;

const armyWriteBodySchema: z.ZodType<ArmyWriteBody> = armyWriteBodySchemaObject;

export type { ArmyWriteBody };
export { armyWriteBodySchema };
