import type {
  CreatedPostRoute,
  EmptyObject,
  CertificationResults,
} from '@domain';
import { emptyObjectSchema, certificationResultsSchema } from '@domain';

/**
 * Request to fetch the latest version of every card,
 * run a validation of each against the current rules version,
 * and certify all that pass.
 * Returns the IDs of the certified and failed versions.
 */
const certifyLatestUnitCardVersionsContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  CertificationResults
> = {
  path: '/unit-cards/certify-latest-versions',
  auth: { authRequired: true, permissionsRequired: ['cards:certify'] },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: certificationResultsSchema,
  },
};

export { certifyLatestUnitCardVersionsContract };
