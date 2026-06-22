import type { UnitType } from '@classicalmoser/prevail-rules/domain';
import { unitTypeSchema } from '@classicalmoser/prevail-rules/domain';
import type { EmptyObject, MediaPostRoute } from '@domain';
import { emptyObjectSchema } from '@domain';

const previewUnitCardContract: MediaPostRoute<
  EmptyObject,
  EmptyObject,
  UnitType,
  'image/svg+xml'
> = {
  path: '/unit-cards/versions/preview',
  auth: { authRequired: true, permissionsRequired: ['cards:create-version'] },
  method: 'POST',
  successContentType: 'image/svg+xml',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: unitTypeSchema,
  },
};

export { previewUnitCardContract };
