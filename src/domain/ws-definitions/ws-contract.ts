import type { InGameSeatContract } from './in-game-seat-contract';

/** Any supported WebSocket contract. */
type WsContract =
  | InGameSeatContract<
      'white',
      Record<string, unknown>,
      unknown,
      unknown,
      unknown,
      unknown
    >
  | InGameSeatContract<
      'black',
      Record<string, unknown>,
      unknown,
      unknown,
      unknown,
      unknown
    >;

export type { WsContract };
