import { emptyObjectSchema } from '@domain';
import { createBotVsBotGameContract } from './create-bot-vs-bot-game';
import { gameContracts } from './game-contracts';
import { getBotVsBotGameContract } from './get-bot-vs-bot-game';
import { stepBotVsBotGameContract } from './step-bot-vs-bot-game';

describe('bot-vs-bot game contracts', () => {
  it(
    'registers create, refresh, and step beside vs-bot',
    { timeout: 5000 },
    () => {
      expect.hasAssertions();

      expect(gameContracts.map((contract) => contract.path)).toStrictEqual([
        '/games/vs-bot',
        '/games/bot-vs-bot',
        '/games/bot-vs-bot/id/:gameId',
        '/games/bot-vs-bot/id/:gameId/step',
      ]);
    },
  );

  it(
    'creates with 201, refreshes with GET, and steps an empty body',
    {
      timeout: 5000,
    },
    () => {
      expect.hasAssertions();

      expect(createBotVsBotGameContract.successStatus).toBe(201);
      expect(getBotVsBotGameContract.method).toBe('GET');
      expect(stepBotVsBotGameContract.method).toBe('POST');
      expect(stepBotVsBotGameContract.successStatus).toBe(200);
      expect(stepBotVsBotGameContract.validators.body).toBe(emptyObjectSchema);
    },
  );

  it(
    'requires game:play on create, refresh, and step',
    { timeout: 5000 },
    () => {
      expect.hasAssertions();

      for (const contract of [
        createBotVsBotGameContract,
        getBotVsBotGameContract,
        stepBotVsBotGameContract,
      ]) {
        expect(contract.auth).toStrictEqual({
          authRequired: true,
          permissionsRequired: ['game:play'],
        });
      }
    },
  );
});
