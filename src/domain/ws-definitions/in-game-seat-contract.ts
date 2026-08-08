import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';
import type {
  InGameSeatOutboundMessage,
  InGameSeatOutboundValidators,
} from './in-game-seat-outbound';

/**
 * Runtime validators for an in-game seat WebSocket connection.
 *
 * Inbound: `playerChoice` only (authoritative shape from the seated client).
 * Outbound: projected `playerChoice` / `gameEffect`, `roundSnapshot`, `choiceRejected`.
 */
interface InGameSeatContractValidators<
  TParams extends Record<string, unknown>,
  TInboundPlayerChoice,
  TOutboundPlayerChoice,
  TGameEffect,
  TRoundSnapshot,
  TChoiceRejected,
> {
  /** Validates connection path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates player choice events submitted by the seated client. */
  playerChoice: z.ZodSchema<TInboundPlayerChoice>;
  /** Outbound payload validators (used by clients and server send paths). */
  outbound: InGameSeatOutboundValidators<
    TOutboundPlayerChoice,
    TGameEffect,
    TRoundSnapshot,
    TChoiceRejected
  >;
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
  TInboundPlayerChoice,
  TOutboundPlayerChoice,
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
    TInboundPlayerChoice,
    TOutboundPlayerChoice,
    TGameEffect,
    TRoundSnapshot,
    TChoiceRejected
  >;
}

/** Convenience alias for outbound messages of a seat contract. */
type InGameSeatOutboundOf<C> =
  C extends InGameSeatContract<
    'white' | 'black',
    Record<string, unknown>,
    unknown,
    infer TOutboundPlayerChoice,
    infer TGameEffect,
    infer TRoundSnapshot,
    infer TChoiceRejected
  >
    ? InGameSeatOutboundMessage<
        TOutboundPlayerChoice,
        TGameEffect,
        TRoundSnapshot,
        TChoiceRejected
      >
    : never;

export type {
  InGameSeatContract,
  InGameSeatContractValidators,
  InGameSeatOutboundOf,
};
