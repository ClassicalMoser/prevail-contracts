import type { z } from 'zod';

/** Discriminated outbound message types for an in-game seat WebSocket. */
type InGameSeatOutboundType =
  | 'playerChoice'
  | 'gameEffect'
  | 'roundSnapshot'
  | 'choiceRejected';

/**
 * Outbound envelope for seated clients.
 *
 * Mid-round: projected `playerChoice` / `gameEffect` for local fold.
 * New round: seat-visible `roundSnapshot` for reconcile.
 * Rejected submit: `choiceRejected` to the submitter only.
 */
type InGameSeatOutboundMessage<
  TPlayerChoice,
  TGameEffect,
  TRoundSnapshot,
  TChoiceRejected,
> =
  | { type: 'playerChoice'; payload: TPlayerChoice }
  | { type: 'gameEffect'; payload: TGameEffect }
  | { type: 'roundSnapshot'; payload: TRoundSnapshot }
  | { type: 'choiceRejected'; payload: TChoiceRejected };

/** Zod validators for each outbound envelope variant. */
interface InGameSeatOutboundValidators<
  TPlayerChoice,
  TGameEffect,
  TRoundSnapshot,
  TChoiceRejected,
> {
  playerChoice: z.ZodSchema<TPlayerChoice>;
  gameEffect: z.ZodSchema<TGameEffect>;
  roundSnapshot: z.ZodSchema<TRoundSnapshot>;
  choiceRejected: z.ZodSchema<TChoiceRejected>;
}

export type {
  InGameSeatOutboundMessage,
  InGameSeatOutboundType,
  InGameSeatOutboundValidators,
};
