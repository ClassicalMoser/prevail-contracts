import type { z } from 'zod';

/** Discriminated outbound message types for an in-game seat WebSocket. */
type InGameSeatOutboundType =
  | 'playerChoice'
  | 'gameEffect'
  | 'gameSnapshot'
  | 'choiceRejected';

/**
 * Outbound envelope for seated clients.
 *
 * Mid-stream: projected `playerChoice` / `gameEffect` for local fold.
 * Current state / on `requestGameSnapshot`: seat-visible `gameSnapshot` for reconcile.
 * Rejected submit: `choiceRejected` to the submitter only.
 */
type InGameSeatOutboundMessage<
  TPlayerChoice,
  TGameEffect,
  TGameSnapshot,
  TChoiceRejected,
> =
  | { type: 'playerChoice'; payload: TPlayerChoice }
  | { type: 'gameEffect'; payload: TGameEffect }
  | { type: 'gameSnapshot'; payload: TGameSnapshot }
  | { type: 'choiceRejected'; payload: TChoiceRejected };

/** Zod validators for each outbound envelope variant. */
interface InGameSeatOutboundValidators<
  TPlayerChoice,
  TGameEffect,
  TGameSnapshot,
  TChoiceRejected,
> {
  playerChoice: z.ZodSchema<TPlayerChoice>;
  gameEffect: z.ZodSchema<TGameEffect>;
  gameSnapshot: z.ZodSchema<TGameSnapshot>;
  choiceRejected: z.ZodSchema<TChoiceRejected>;
}

export type {
  InGameSeatOutboundMessage,
  InGameSeatOutboundType,
  InGameSeatOutboundValidators,
};
