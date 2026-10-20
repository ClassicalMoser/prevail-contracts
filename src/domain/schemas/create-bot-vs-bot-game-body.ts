import type { AssertExact } from '@domain/utils';
import type { PlayableGameMode } from './playable-game-mode';
import { playableGameModeSchema } from './playable-game-mode';
import { uuidSchema } from './uuid';
import { z } from 'zod';

/** Body for creating a bot-vs-bot game (mini or standard). */
interface CreateBotVsBotGameBody extends Record<string, unknown> {
  /** Rules game mode — mini or standard. */
  gameMode: PlayableGameMode;
  /** Owned army id for the white seat. */
  whiteArmyId: string;
  /** Owned army id for the black seat. */
  blackArmyId: string;
}

const createBotVsBotGameBodySchemaObject = z
  .object({
    gameMode: playableGameModeSchema,
    whiteArmyId: uuidSchema,
    blackArmyId: uuidSchema,
  })
  .strict();

type CreateBotVsBotGameBodySchema = z.infer<
  typeof createBotVsBotGameBodySchemaObject
>;

const _assertExactCreateBotVsBotGameBody: AssertExact<
  CreateBotVsBotGameBody,
  CreateBotVsBotGameBodySchema
> = true;

const createBotVsBotGameBodySchema: z.ZodType<CreateBotVsBotGameBody> =
  createBotVsBotGameBodySchemaObject;

export type { CreateBotVsBotGameBody };
export { createBotVsBotGameBodySchema };
