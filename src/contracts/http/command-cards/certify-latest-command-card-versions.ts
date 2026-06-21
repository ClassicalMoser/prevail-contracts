import type { AssertExact, CreatedPostRoute, EmptyObject } from '@domain';
import { emptyObjectSchema, uuidSchema } from '@domain';
import { z } from 'zod';

/** Shape of the response body of the `certifyLatestCommandCardVersions` route. */
interface NewCertifications {
  succeeded: string[]; // IDs of the latest command card versions that were certified
  failed: string[]; // IDs of the latest command card versions that were not certified
}

/** Schema for the request body of the `certifyLatestCommandCardVersions` route. */
const newCertificationsSchema = z.object({
  succeeded: z.array(uuidSchema),
  failed: z.array(uuidSchema),
});

// Prevent type drift between the contract and the schema
type _assertExactNewCertificationsSchema = AssertExact<
  NewCertifications,
  z.infer<typeof newCertificationsSchema>
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
  NewCertifications
> = {
  path: '/command-cards/certify-latest-versions',
  auth: { authRequired: true, permissionsRequired: ['cards:certify'] },
  method: 'POST',
  successStatus: 201,
  validators: {
    params: emptyObjectSchema,
    query: emptyObjectSchema,
    body: emptyObjectSchema,
    data: newCertificationsSchema,
  },
};

export type { NewCertifications };
export { certifyLatestCommandCardVersionsContract };
