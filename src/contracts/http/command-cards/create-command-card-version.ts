import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import { emptyObjectSchema } from '@domain';
import type { CreatedPostRoute, EmptyObject } from '@domain';

/**
 * NOTE: ID passed on create is the ID of the card to create a version of,
 * not the ID of the version to create.
 * Version field is semver and is passed.
 */
const createCommandCardVersionContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  Card,
  Card
> = {
  path: '/command-cards/versions',
  auth: { authRequired: true, permissionsRequired: ['cards:create-version'] },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: cardSchema,
    data: cardSchema,
  },
};

export { createCommandCardVersionContract };
