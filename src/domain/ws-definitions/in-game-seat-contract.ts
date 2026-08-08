import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';
import type {
  InGameSeatInboundMessage,
  InGameSeatInboundValidators,
} from './in-game-seat-inbound';
import type {
  InGameSeatOutboundMessage,
  InGameSeatOutboundValidators,
} from './in-game-seat-outbound';

/**
 * Runtime validators for an in-game seat WebSocket connection.
 *
 * Inbound: `playerChoice` and `requestGameSnapshot`.
 * Outbound: projected `playerChoice` / `gameEffect`, `gameSnapshot`, `choiceRejected`.
 */
interface InGameSeatContractValidators<
  TParams extends Record<string, unknown>,
  TInboundPlayerChoice,
  TOutboundPlayerChoice,
  TGameEffect,
  TGameSnapshot,
  TChoiceRejected,
> {
  /** Validates connection path parameters. */
  params: z.ZodSchema<TParams>;
  /** Inbound payload validators (used by server receive paths). */
  inbound: InGameSeatInboundValidators<TInboundPlayerChoice>;
  /** Outbound payload validators (used by clients and server send paths). */
  outbound: InGameSeatOutboundValidators<
    TOutboundPlayerChoice,
    TGameEffect,
    TGameSnapshot,
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
  TGameSnapshot,
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
    TGameSnapshot,
    TChoiceRejected
  >;
}

/** Convenience alias for inbound messages of a seat contract. */
type InGameSeatInboundOf<C> =
  C extends InGameSeatContract<
    'white' | 'black',
    Record<string, unknown>,
    infer TInboundPlayerChoice,
    unknown,
    unknown,
    unknown,
    unknown
  >
    ? InGameSeatInboundMessage<TInboundPlayerChoice>
    : never;

/** Convenience alias for outbound messages of a seat contract. */
type InGameSeatOutboundOf<C> =
  C extends InGameSeatContract<
    'white' | 'black',
    Record<string, unknown>,
    unknown,
    infer TOutboundPlayerChoice,
    infer TGameEffect,
    infer TGameSnapshot,
    infer TChoiceRejected
  >
    ? InGameSeatOutboundMessage<
        TOutboundPlayerChoice,
        TGameEffect,
        TGameSnapshot,
        TChoiceRejected
      >
    : never;

export type {
  InGameSeatContract,
  InGameSeatContractValidators,
  InGameSeatInboundOf,
  InGameSeatOutboundOf,
};
