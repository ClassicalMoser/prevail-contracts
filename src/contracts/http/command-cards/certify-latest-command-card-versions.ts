import type { AssertExact, CreatedPostRoute, EmptyObject } from '@domain';
import { emptyObjectSchema, uuidSchema } from '@domain';
import { z } from 'zod';

/** Shape of the response body of the `certifyLatestCommandCardVersions` route. */
interface CertificationResults {
  succeeded: string[]; // IDs of the latest command card versions that were certified
  failed: string[]; // IDs of the latest command card versions that were not certified
}

/** Schema for the response body of the `certifyLatestCommandCardVersions` route. */
const certificationResultsSchema = z.object({
  succeeded: z.array(uuidSchema),
  failed: z.array(uuidSchema),
});

// Prevent type drift between the contract and the schema
type _assertExactCertificationResultsSchema = AssertExact<
  CertificationResults,
  z.infer<typeof certificationResultsSchema>
>;

/**
 * Request to fetch the latest version of every card,
 * run a validation of each against the current rules version,
 * and certify all that pass.
 * Returns the IDs of the certified and failed versions.
 */
const certifyLatestCommandCardVersionsContract: CreatedPostRoute<
  EmptyObject,
  EmptyObject,
  EmptyObject,
  CertificationResults
> = {
  path: '/command-cards/certify-latest-versions',
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

export type { CertificationResults };
export { certifyLatestCommandCardVersionsContract };
