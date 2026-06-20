import { z } from 'zod';

/** Validates RFC 4122 UUID strings at the request boundary. */
export const uuidSchema: z.ZodUUID = z.uuid();
