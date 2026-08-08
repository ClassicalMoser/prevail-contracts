import type {
  FailValidationResult,
  GameEffectEvent,
  GameForVisibility,
  PlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  failValidationResultSchema,
  gameEffectEventSchema,
  playerChoiceEventSchema,
  whiteSeenGameSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { GameWsParams, InGameSeatContract } from '@domain';
import { gameWsParamsSchema } from '@domain';

/** White-seat in-game WebSocket: submit choices; receive effects + round snapshots. */
const whiteInGameWsContract: InGameSeatContract<
  'white',
  GameWsParams,
  PlayerChoiceEvent,
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
    gameEffect: gameEffectEventSchema,
    roundSnapshot: whiteSeenGameSchema,
    choiceRejected: failValidationResultSchema,
  },
};

export { whiteInGameWsContract };
