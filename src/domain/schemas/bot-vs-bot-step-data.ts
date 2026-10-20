import type {
  GameForVisibility,
  PlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  authoritativeGameSchema,
  playerChoiceEventSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { AssertExact } from '@domain/utils';
import { z } from 'zod';

/**
 * Result of playing one bot-vs-bot choice.
 *
 * `choice` is the choice this call played. `game` is the position after that
 * choice and the effects that followed it. The client replaces its board.
 *
 * `awaitingChoice` always includes a choice.
 * `gameOver` includes one when this call ended the game, and `null` when the
 * game was already over. A later call does not play again.
 * `stuck` is `choice: null` and the board unchanged: the selector had no
 * legal choice. A later call returns the same result.
 *
 * The winner, including a draw, stays on `game.gameState.winner`.
 */
type BotVsBotStepData =
  | {
      status: 'awaitingChoice';
      choice: PlayerChoiceEvent;
      game: GameForVisibility<'authoritative'>;
    }
  | {
      status: 'gameOver';
      choice: PlayerChoiceEvent | null;
      game: GameForVisibility<'authoritative'>;
    }
  | {
      status: 'stuck';
      choice: null;
      game: GameForVisibility<'authoritative'>;
    };

const botVsBotStepDataSchemaObject = z.discriminatedUnion('status', [
  z
    .object({
      status: z.literal('awaitingChoice'),
      choice: playerChoiceEventSchema,
      game: authoritativeGameSchema,
    })
    .strict(),
  z
    .object({
      status: z.literal('gameOver'),
      choice: playerChoiceEventSchema.nullable(),
      game: authoritativeGameSchema,
    })
    .strict(),
  z
    .object({
      status: z.literal('stuck'),
      choice: z.null(),
      game: authoritativeGameSchema,
    })
    .strict(),
]);

type BotVsBotStepDataSchema = z.infer<typeof botVsBotStepDataSchemaObject>;

const _assertExactBotVsBotStepData: AssertExact<
  BotVsBotStepData,
  BotVsBotStepDataSchema
> = true;

const botVsBotStepDataSchema: z.ZodType<BotVsBotStepData> =
  botVsBotStepDataSchemaObject;

export type { BotVsBotStepData };
export { botVsBotStepDataSchema };
