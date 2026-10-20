import { createBotVsBotGameBodySchema } from './create-bot-vs-bot-game-body';

const whiteArmyId = '11111111-1111-4111-8111-111111111111';
const blackArmyId = '22222222-2222-4222-8222-222222222222';

describe('create bot-vs-bot game body', () => {
  it('accepts mini and standard', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const mini = {
      gameMode: 'mini',
      whiteArmyId,
      blackArmyId,
    };
    const standard = {
      gameMode: 'standard',
      whiteArmyId,
      blackArmyId,
    };

    expect(createBotVsBotGameBodySchema.parse(mini)).toStrictEqual(mini);
    expect(createBotVsBotGameBodySchema.parse(standard)).toStrictEqual(
      standard,
    );
  });

  it('rejects tutorial and epic', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const tutorial = createBotVsBotGameBodySchema.safeParse({
      gameMode: 'tutorial',
      whiteArmyId,
      blackArmyId,
    });
    const epic = createBotVsBotGameBodySchema.safeParse({
      gameMode: 'epic',
      whiteArmyId,
      blackArmyId,
    });

    expect(tutorial.success).toBe(false);
    expect(tutorial.error?.issues[0]?.path).toStrictEqual(['gameMode']);
    expect(epic.success).toBe(false);
    expect(epic.error?.issues[0]?.path).toStrictEqual(['gameMode']);
  });

  it('rejects an army id that is not a uuid', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const result = createBotVsBotGameBodySchema.safeParse({
      gameMode: 'mini',
      whiteArmyId: 'white',
      blackArmyId,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toStrictEqual(['whiteArmyId']);
  });

  it('rejects a human seat', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const result = createBotVsBotGameBodySchema.safeParse({
      gameMode: 'mini',
      humanSide: 'white',
      whiteArmyId,
      blackArmyId,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]).toMatchObject({
      code: 'unrecognized_keys',
      keys: ['humanSide'],
    });
  });
});
