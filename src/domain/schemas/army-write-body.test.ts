import type { CommandCard } from '@classicalmoser/prevail-rules/domain';
import { armyWriteBodySchema } from './army-write-body';

const commandCard = (id: string): CommandCard => ({
  command: {
    modifiers: [],
    number: 1,
    restrictions: {
      inspirationRangeRestriction: 1,
      restrictionType: 'none',
    },
    size: 'units',
    type: 'movement',
  },
  cost: 10,
  id,
  initiative: 1,
  modifiers: ['attack'],
  name: 'Test Card',
  roundEffect: {
    modifiers: [{ type: 'attack', value: 1 }],
    restrictions: {
      inspirationRangeRestriction: 1,
      restrictionType: 'none',
    },
  },
  unitSupport: { count: 1, supportType: 'generic' },
  version: '1.0.0',
});

describe('owned army write body', () => {
  it('accepts composition without id or name', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const body = {
      units: [],
      commandCards: [commandCard('22222222-2222-4222-8222-222222222201')],
    };

    expect(armyWriteBodySchema.parse(body)).toStrictEqual(body);
  });

  it('rejects duplicate command cards', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const card = commandCard('22222222-2222-4222-8222-222222222201');
    const result = armyWriteBodySchema.safeParse({
      units: [],
      commandCards: [card, card],
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toStrictEqual(['commandCards', 1]);
  });
});
