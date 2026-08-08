import type { EmptyObject } from '@domain/schemas';
import type { z } from 'zod';

/** Discriminated inbound message types for an in-game seat WebSocket. */
type InGameSeatInboundType = 'playerChoice' | 'requestGameSnapshot';

/**
 * Inbound envelope from seated clients.
 *
 * `playerChoice`: submit an authoritative choice for this seat.
 * `requestGameSnapshot`: ask the server for the current seat-visible game
 * (reconnect / crash / reload). Server replies with outbound `gameSnapshot`.
 */
type InGameSeatInboundMessage<TPlayerChoice> =
  | { type: 'playerChoice'; payload: TPlayerChoice }
  | { type: 'requestGameSnapshot'; payload: EmptyObject };

/** Zod validators for each inbound envelope variant. */
interface InGameSeatInboundValidators<TPlayerChoice> {
  playerChoice: z.ZodSchema<TPlayerChoice>;
  requestGameSnapshot: z.ZodSchema<EmptyObject>;
}

export type {
  InGameSeatInboundMessage,
  InGameSeatInboundType,
  InGameSeatInboundValidators,
};
