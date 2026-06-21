import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Runtime validators for a DELETE route's inputs. */
interface DeleteRouteValidators<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
}

/**
 * Contract for a DELETE HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link DeleteRouteValidators} must parse values as those same types at runtime.
 *
 * Success is HTTP 204 No Content with no response body. Failures return
 * `{ message: string }` in the body; HTTP status is on the response.
 */
interface DeleteRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
> {
  /** Route path, e.g. `/games/:id`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'DELETE';
  validators: DeleteRouteValidators<TParams, TQuery>;
}

export type { DeleteRoute, DeleteRouteValidators };
