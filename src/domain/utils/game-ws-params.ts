import type { AssertExact } from './assert-exact';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Path parameters for in-game WebSocket connections. */
interface GameWsParams extends Record<string, unknown> {
  /** The UUID of the game. */
  gameId: string;
}

/** Schema for in-game WebSocket connection path parameters. */
const gameWsParamsSchema: z.ZodSchema<GameWsParams> = z.object({
  gameId: uuidSchema,
});

type _assertExactGameWsParamsSchema = AssertExact<
  GameWsParams,
  z.infer<typeof gameWsParamsSchema>
>;

export type { GameWsParams };
export { gameWsParamsSchema };
