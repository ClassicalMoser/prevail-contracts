import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

/** Runtime validators for a DELETE route's inputs and outputs. */
interface DeleteRouteValidators<TParams, TQuery, TReturnData> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
  /** Validates the success payload (`Response.data`). */
  returnData: z.ZodSchema<TReturnData>;
  /** Validates the full response envelope (success or error). */
  response: z.ZodSchema<Response<TReturnData>>;
}

/**
 * Contract for a DELETE HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link DeleteRouteValidators} must parse values as those same types at runtime.
 */
interface DeleteRoute<TParams, TQuery, TReturnData> {
  /** Route path, e.g. `/games/:id`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'DELETE';
  validators: DeleteRouteValidators<TParams, TQuery, TReturnData>;
}

export type { DeleteRoute, DeleteRouteValidators };
