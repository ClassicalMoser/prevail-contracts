import type { PlayerSide } from '@classicalmoser/prevail-rules/domain';
import { playerSideSchema } from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import type { PlayableGameMode } from './playable-game-mode';
import { playableGameModeSchema } from './playable-game-mode';
import { uuidSchema } from './uuid';
import { z } from 'zod';

/** Body for creating a human-vs-bot game (mini or standard). */
interface CreateVsBotGameBody extends Record<string, unknown> {
  /** Side the authenticated human will play. */
  humanSide: PlayerSide;
  /** Rules game mode — mini or standard. */
  gameMode: PlayableGameMode;
  /** Owned army id for the white seat. */
  whiteArmyId: string;
  /** Owned army id for the black seat. */
  blackArmyId: string;
}

const createVsBotGameBodySchemaObject = z
  .object({
    humanSide: playerSideSchema,
    gameMode: playableGameModeSchema,
    whiteArmyId: uuidSchema,
    blackArmyId: uuidSchema,
  })
  .strict();

type CreateVsBotGameBodySchema = z.infer<
  typeof createVsBotGameBodySchemaObject
>;

const _assertExactCreateVsBotGameBody: AssertExact<
  CreateVsBotGameBody,
  CreateVsBotGameBodySchema
> = true;

const createVsBotGameBodySchema: z.ZodType<CreateVsBotGameBody> =
  createVsBotGameBodySchemaObject;

export type { CreateVsBotGameBody };
export { createVsBotGameBodySchema };
