import type { CommandCard } from '@classicalmoser/prevail-rules/domain';
import { tempUnits } from '@classicalmoser/prevail-rules/domain';
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
  it('accepts a named composition without an id', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const body = {
      name: 'First Legion',
      units: [],
      commandCards: [commandCard('22222222-2222-4222-8222-222222222201')],
    };

    expect(armyWriteBodySchema.parse(body)).toStrictEqual(body);
  });

  it('rejects a body without a name', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const result = armyWriteBodySchema.safeParse({
      units: [],
      commandCards: [],
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toStrictEqual(['name']);
  });

  it('rejects duplicate command cards', { timeout: 5000 }, () => {
    expect.hasAssertions();

    const card = commandCard('22222222-2222-4222-8222-222222222201');
    const result = armyWriteBodySchema.safeParse({
      name: 'First Legion',
      units: [],
      commandCards: [card, card],
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toStrictEqual(['commandCards', 1]);
  });

  it(
    'rejects more of a unit type than its limit allows',
    { timeout: 5000 },
    () => {
      expect.hasAssertions();
      // African Elephants may be fielded at most twice; this asks for three.
      const elephants = tempUnits.find(
        (unitType) => unitType.name === 'African Elephants',
      );

      const result = armyWriteBodySchema.safeParse({
        name: 'First Legion',
        units: [{ count: 3, unitType: elephants }],
        commandCards: [],
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues[0]?.path).toStrictEqual([
        'units',
        0,
        'count',
      ]);
    },
  );
});
