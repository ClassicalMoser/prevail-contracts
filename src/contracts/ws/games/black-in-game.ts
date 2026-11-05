import type {
  FailValidationResult,
  GameEffectEvent,
  GameForVisibility,
  PlayerChoiceEvent,
  ProjectedPlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  legalBlackSeenGameSchema,
  failValidationResultSchema,
  gameEffectEventSchema,
  playerChoiceEventSchema,
  projectedPlayerChoiceEventSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { GameWsParams, InGameSeatContract } from '@domain';
import { emptyObjectSchema, gameWsParamsSchema } from '@domain';

/**
 * Black-seat in-game WebSocket.
 * Inbound: playerChoice, requestGameSnapshot.
 * Outbound: projected events + current game snapshots + rejections.
 */
const blackInGameWsContract: InGameSeatContract<
  'black',
  GameWsParams,
  PlayerChoiceEvent,
  ProjectedPlayerChoiceEvent,
  GameEffectEvent,
  GameForVisibility<'blackSeen'>,
  FailValidationResult
> = {
  path: '/ws/games/id/:gameId/black',
  side: 'black',
  auth: {
    authRequired: true,
    permissionsRequired: ['game:play'],
  },
  validators: {
    params: gameWsParamsSchema,
    inbound: {
      playerChoice: playerChoiceEventSchema,
      requestGameSnapshot: emptyObjectSchema,
    },
    outbound: {
      playerChoice: projectedPlayerChoiceEventSchema,
      gameEffect: gameEffectEventSchema,
      gameSnapshot: legalBlackSeenGameSchema,
      choiceRejected: failValidationResultSchema,
    },
  },
};

export { blackInGameWsContract };
