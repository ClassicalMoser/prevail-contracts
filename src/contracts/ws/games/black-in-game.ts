import type {
  FailValidationResult,
  GameEffectEvent,
  GameForVisibility,
  PlayerChoiceEvent,
  ProjectedPlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  blackSeenGameSchema,
  failValidationResultSchema,
  gameEffectEventSchema,
  playerChoiceEventSchema,
  projectedPlayerChoiceEventSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { GameWsParams, InGameSeatContract } from '@domain';
import { gameWsParamsSchema } from '@domain';

/**
 * Black-seat in-game WebSocket.
 * Inbound: playerChoice. Outbound: projected events + round snapshots + rejections.
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
    playerChoice: playerChoiceEventSchema,
    outbound: {
      playerChoice: projectedPlayerChoiceEventSchema,
      gameEffect: gameEffectEventSchema,
      roundSnapshot: blackSeenGameSchema,
      choiceRejected: failValidationResultSchema,
    },
  },
};

export { blackInGameWsContract };
