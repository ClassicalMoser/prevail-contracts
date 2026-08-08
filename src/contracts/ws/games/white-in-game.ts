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
import { gameWsParamsSchema } from '@domain';

/**
 * White-seat in-game WebSocket.
 * Inbound: playerChoice. Outbound: projected events + round snapshots + rejections.
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
    playerChoice: playerChoiceEventSchema,
    outbound: {
      playerChoice: projectedPlayerChoiceEventSchema,
      gameEffect: gameEffectEventSchema,
      roundSnapshot: whiteSeenGameSchema,
      choiceRejected: failValidationResultSchema,
    },
  },
};

export { whiteInGameWsContract };
