import type { AssertExact } from './assert-exact';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Result of a bulk certification run over the latest card versions. */
interface CertificationResults extends Record<string, unknown> {
  /** IDs of the latest card versions that were certified. */
  succeeded: string[];
  /** IDs of the latest card versions that were not certified. */
  failed: string[];
}

/** Schema for the response body of certify-latest-versions routes. */
const certificationResultsSchema: z.ZodSchema<CertificationResults> = z.object({
  succeeded: z.array(uuidSchema),
  failed: z.array(uuidSchema),
});

type _assertExactCertificationResultsSchema = AssertExact<
  CertificationResults,
  z.infer<typeof certificationResultsSchema>
>;

export type { CertificationResults };
export { certificationResultsSchema };
