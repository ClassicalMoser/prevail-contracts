import type { UnitType } from '@classicalmoser/prevail-rules/domain';
import { unitTypeSchema } from '@classicalmoser/prevail-rules/domain';
import { emptyObjectSchema } from '@domain';
import type { CreatedPostRoute, EmptyObject } from '@domain';

/**
 * NOTE: ID passed on create is the ID of the card to create a version of,
 * not the ID of the version to create.
 * Version field is semver and is passed.
 */
const createUnitCardVersionContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  UnitType,
  UnitType
> = {
  path: '/unit-cards/versions',
  auth: { authRequired: true, permissionsRequired: ['cards:create-version'] },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: unitTypeSchema,
    data: unitTypeSchema,
  },
};

export { createUnitCardVersionContract };
