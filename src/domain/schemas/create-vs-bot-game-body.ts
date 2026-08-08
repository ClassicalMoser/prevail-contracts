import type {
  GameModeName,
  PlayerSide,
} from '@classicalmoser/prevail-rules/domain';
import {
  gameModeNameSchema,
  playerSideSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Body for creating a human-vs-bot game. */
interface CreateVsBotGameBody extends Record<string, unknown> {
  /** Side the authenticated human will play. */
  humanSide: PlayerSide;
  /** Rules game mode. */
  gameMode: GameModeName;
  /** Owned army id for the white seat. */
  whiteArmyId: string;
  /** Owned army id for the black seat. */
  blackArmyId: string;
}

const createVsBotGameBodySchemaObject = z
  .object({
    humanSide: playerSideSchema,
    gameMode: gameModeNameSchema,
    whiteArmyId: uuidSchema,
    blackArmyId: uuidSchema,
  })
  .strict();

type CreateVsBotGameBodySchema = z.infer<typeof createVsBotGameBodySchemaObject>;

const _assertExactCreateVsBotGameBody: AssertExact<
  CreateVsBotGameBody,
  CreateVsBotGameBodySchema
> = true;

const createVsBotGameBodySchema: z.ZodType<CreateVsBotGameBody> =
  createVsBotGameBodySchemaObject;

export type { CreateVsBotGameBody };
export { createVsBotGameBodySchema };
