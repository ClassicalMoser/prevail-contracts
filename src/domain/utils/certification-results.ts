import type { AssertExact } from './assert-exact';
import { uuidSchema } from '@domain/schemas';
import { z } from 'zod';

/** Result of a bulk certification run over the latest card versions. */
interface CertificationResults extends Record<string, unknown> {
  /** IDs of the latest card versions that are certified. */
  certified: string[];
  /** IDs of the latest card versions that are not certified. */
  uncertified: string[];
}

/** Schema for the response body of certify-latest-versions routes. */
const certificationResultsSchema: z.ZodSchema<CertificationResults> = z.object({
  certified: z.array(uuidSchema),
  uncertified: z.array(uuidSchema),
});

type _assertExactCertificationResultsSchema = AssertExact<
  CertificationResults,
  z.infer<typeof certificationResultsSchema>
>;

export type { CertificationResults };
export { certificationResultsSchema };
