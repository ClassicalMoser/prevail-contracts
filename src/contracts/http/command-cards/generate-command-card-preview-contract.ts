import type { Card } from '@classicalmoser/prevail-rules/domain';
import { cardSchema } from '@classicalmoser/prevail-rules/domain';
import type { EmptyObject, MediaPostRoute } from '@domain';
import { emptyObjectSchema } from '@domain';

const previewCommandCardContract: MediaPostRoute<
  EmptyObject,
  EmptyObject,
  Card,
  'image/svg+xml'
> = {
  path: '/command-cards/versions/preview',
  auth: { authRequired: true, permissionsRequired: ['cards:create-version'] },
  method: 'POST',
  successContentType: 'image/svg+xml',
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: cardSchema,
  },
};

export { previewCommandCardContract };
