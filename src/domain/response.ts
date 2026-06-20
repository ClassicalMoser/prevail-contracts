import { z } from 'zod';

/** Error envelope returned when a route handler fails. */
interface ErrorResponse {
  message: string;
  statusCode: number;
}

/** Success envelope returned when a route handler succeeds. */
interface SuccessResponse<T> {
  data: T;
  statusCode: 200;
}

/** Full response shape for a route: either success payload or error. */
type Response<T> = ErrorResponse | SuccessResponse<T>;

/**
 * Builds a validator for {@link Response} from a success-payload schema.
 *
 * The payload schema validates `data` on success; the returned schema also
 * accepts the shared error envelope.
 */
function makeResponseSchema<T>(
  returnDataSchema: z.ZodSchema<T>,
): z.ZodSchema<Response<T>> {
  return z.union([
    z.object({
      data: returnDataSchema,
      statusCode: z.literal(200),
    }),
    z.object({
      message: z.string(),
      statusCode: z.number(),
    }),
  ]);
}

export type { Response, ErrorResponse, SuccessResponse };
export { makeResponseSchema };
