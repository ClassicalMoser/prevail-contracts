import { createEmptyGameState } from '@classicalmoser/prevail-rules/domain';
import type {
  GameForVisibility,
  PlayerChoiceEvent,
} from '@classicalmoser/prevail-rules/domain';
import { botVsBotStepDataSchema } from './bot-vs-bot-step-data';

const playerId = '22222222-2222-4222-8222-222222222222';

const choice: PlayerChoiceEvent = {
  eventType: 'playerChoice',
  choiceType: 'doneIssuingCommands',
  eventNumber: 0,
  player: 'white',
};

function authoritativeGame(): GameForVisibility<'authoritative'> {
  return {
    blackArmy: {
      id: '33333333-3333-4333-8333-333333333333',
      name: 'Black',
      units: [],
      commandCards: [],
    },
    blackPlayer: playerId,
    gameMode: 'mini',
    gameState: createEmptyGameState('mini'),
    id: '44444444-4444-4444-8444-444444444444',
    whiteArmy: {
      id: '11111111-1111-4111-8111-111111111111',
      name: 'White',
      units: [],
      commandCards: [],
    },
    whitePlayer: playerId,
  };
}

describe('bot-vs-bot step data', () => {
  it(
    'requires a choice while the game is awaiting one',
    { timeout: 5000 },
    () => {
      expect.hasAssertions();

      const game = authoritativeGame();
      const data = { status: 'awaitingChoice', choice, game };

      expect(botVsBotStepDataSchema.parse(data)).toStrictEqual(data);

      const missingChoice = botVsBotStepDataSchema.safeParse({
        status: 'awaitingChoice',
        choice: null,
        game,
      });

      expect(missingChoice.success).toBe(false);
      expect(missingChoice.error?.issues[0]?.path).toStrictEqual(['choice']);
    },
  );

  it(
    'allows a missing choice only once the game is already over',
    {
      timeout: 5000,
    },
    () => {
      expect.hasAssertions();

      const game = authoritativeGame();

      expect(
        botVsBotStepDataSchema.parse({ status: 'gameOver', choice, game }),
      ).toStrictEqual({ status: 'gameOver', choice, game });
      expect(
        botVsBotStepDataSchema.parse({
          status: 'gameOver',
          choice: null,
          game,
        }),
      ).toStrictEqual({ status: 'gameOver', choice: null, game });
    },
  );

  it('rejects a choice when the selector is stuck', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const game = authoritativeGame();

    expect(
      botVsBotStepDataSchema.parse({ status: 'stuck', choice: null, game }),
    ).toStrictEqual({ status: 'stuck', choice: null, game });

    const played = botVsBotStepDataSchema.safeParse({
      status: 'stuck',
      choice,
      game,
    });

    expect(played.success).toBe(false);
    expect(played.error?.issues[0]?.path).toStrictEqual(['choice']);
  });

  it('rejects an unknown status', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const result = botVsBotStepDataSchema.safeParse({
      status: 'rejected',
      choice: null,
      game: authoritativeGame(),
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toStrictEqual(['status']);
  });
});
