import type { PostRoute, EmptyObject, CertificationResults } from '@domain';
import { emptyObjectSchema, certificationResultsSchema } from '@domain';

/**
 * Atomically fetches the latest version of every card, validates each against
 * the current rules version, and certifies all that pass.
 * Returns the resulting certification state: the IDs of the certified and
 * uncertified versions after the run.
 */
const updateCommandCardCertificationsContract: PostRoute<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  CertificationResults
> = {
  path: '/command-cards/update-certifications',
  auth: { authRequired: true, permissionsRequired: ['cards:certify'] },
  method: 'POST',
  successStatus: 200,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: certificationResultsSchema,
  },
};

export { updateCommandCardCertificationsContract };
