import type {
  FailValidationResult,
  GameEffectEvent,
  GameForVisibility,
  PlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import {
  blackSeenGameSchema,
  failValidationResultSchema,
  gameEffectEventSchema,
  playerChoiceEventSchema,
} from '@classicalmoser/prevail-rules/domain';
import type { GameWsParams, InGameSeatContract } from '@domain';
import { gameWsParamsSchema } from '@domain';

/** Black-seat in-game WebSocket: submit choices; receive effects + round snapshots. */
const blackInGameWsContract: InGameSeatContract<
  'black',
  GameWsParams,
  PlayerChoiceEvent,
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
    gameEffect: gameEffectEventSchema,
    roundSnapshot: blackSeenGameSchema,
    choiceRejected: failValidationResultSchema,
  },
};

export { blackInGameWsContract };
