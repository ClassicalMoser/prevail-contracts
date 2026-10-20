import { createVsBotGameBodySchema } from './create-vs-bot-game-body';

const whiteArmyId = '11111111-1111-4111-8111-111111111111';
const blackArmyId = '22222222-2222-4222-8222-222222222222';

describe('create vs-bot game body', () => {
  it('accepts mini and standard', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const mini = {
      humanSide: 'white',
      gameMode: 'mini',
      whiteArmyId,
      blackArmyId,
    };
    const standard = {
      humanSide: 'black',
      gameMode: 'standard',
      whiteArmyId,
      blackArmyId,
    };

    expect(createVsBotGameBodySchema.parse(mini)).toStrictEqual(mini);
    expect(createVsBotGameBodySchema.parse(standard)).toStrictEqual(standard);
  });

  it('rejects tutorial and epic', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const tutorial = createVsBotGameBodySchema.safeParse({
      humanSide: 'white',
      gameMode: 'tutorial',
      whiteArmyId,
      blackArmyId,
    });
    const epic = createVsBotGameBodySchema.safeParse({
      humanSide: 'white',
      gameMode: 'epic',
      whiteArmyId,
      blackArmyId,
    });

    expect(tutorial.success).toBe(false);
    expect(tutorial.error?.issues[0]?.path).toStrictEqual(['gameMode']);
    expect(epic.success).toBe(false);
    expect(epic.error?.issues[0]?.path).toStrictEqual(['gameMode']);
  });
});
