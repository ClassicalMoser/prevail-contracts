import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Runtime validators for an in-game seat WebSocket connection. */
interface InGameSeatContractValidators<
  TParams extends Record<string, unknown>,
  TPlayerChoice,
  TGameEffect,
  TRoundSnapshot,
  TChoiceRejected,
> {
  /** Validates connection path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates player choice events submitted by the seated client. */
  playerChoice: z.ZodSchema<TPlayerChoice>;
  /** Validates game effect events streamed to the seated client. */
  gameEffect: z.ZodSchema<TGameEffect>;
  /** Validates per-round perspective snapshots sent to the seated client. */
  roundSnapshot: z.ZodSchema<TRoundSnapshot>;
  /** Validates choice rejection payloads sent to the seated client. */
  choiceRejected: z.ZodSchema<TChoiceRejected>;
}

/**
 * Contract for a seated player WebSocket connection (white or black).
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link InGameSeatContractValidators} must parse values as those same types at runtime.
 */
interface InGameSeatContract<
  TSide extends 'white' | 'black',
  TParams extends Record<string, unknown>,
  TPlayerChoice,
  TGameEffect,
  TRoundSnapshot,
  TChoiceRejected,
> {
  /** Connection path, e.g. `/ws/games/id/:gameId/white`. */
  path: string;
  /** Seat this connection is bound to. */
  side: TSide;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  validators: InGameSeatContractValidators<
    TParams,
    TPlayerChoice,
    TGameEffect,
    TRoundSnapshot,
    TChoiceRejected
  >;
}

export type { InGameSeatContract, InGameSeatContractValidators };
