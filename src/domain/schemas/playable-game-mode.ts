import type { GameModeName } from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import { z } from 'zod';

/** Game modes offered when creating a vs-bot or bot-vs-bot game. */
const playableGameModes = ['mini', 'standard'] as const;

type PlayableGameMode = Extract<
  GameModeName,
  (typeof playableGameModes)[number]
>;

const playableGameModeSchemaObject = z.enum(playableGameModes);

type PlayableGameModeSchema = z.infer<typeof playableGameModeSchemaObject>;

const _assertExactPlayableGameMode: AssertExact<
  PlayableGameMode,
  PlayableGameModeSchema
> = true;

const playableGameModeSchema: z.ZodType<PlayableGameMode> =
  playableGameModeSchemaObject;

export type { PlayableGameMode };
export { playableGameModeSchema };
