import type {
  FailValidationResult,
  GameEffectEvent,
  GameForVisibility,
  PlayerChoiceEvent,
  ProjectedPlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  failValidationResultSchema,
  gameEffectEventSchema,
  playerChoiceEventSchema,
  projectedPlayerChoiceEventSchema,
  whiteSeenGameSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { GameWsParams, InGameSeatContract } from '@domain';
import { emptyObjectSchema, gameWsParamsSchema } from '@domain';

/**
 * White-seat in-game WebSocket.
 * Inbound: playerChoice, requestGameSnapshot.
 * Outbound: projected events + current game snapshots + rejections.
 */
const whiteInGameWsContract: InGameSeatContract<
  'white',
  GameWsParams,
  PlayerChoiceEvent,
  ProjectedPlayerChoiceEvent,
  GameEffectEvent,
  GameForVisibility<'whiteSeen'>,
  FailValidationResult
> = {
  path: '/ws/games/id/:gameId/white',
  side: 'white',
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
      gameSnapshot: whiteSeenGameSchema,
      choiceRejected: failValidationResultSchema,
    },
  },
};

export { whiteInGameWsContract };
