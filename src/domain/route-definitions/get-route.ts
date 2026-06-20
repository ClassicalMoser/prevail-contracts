import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

/** Runtime validators for a GET route's inputs and outputs. */
interface GetRouteValidators<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TReturnData,
> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
  /** Validates the full response envelope (success or error). */
  response: z.ZodSchema<Response<TReturnData>>;
}

/**
 * Contract for a GET HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link GetRouteValidators} must parse values as those same types at runtime.
 */
interface GetRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TReturnData,
> {
  /** Route path, e.g. `/command-cards`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'GET';
  validators: GetRouteValidators<TParams, TQuery, TReturnData>;
}

export type { GetRoute, GetRouteValidators };
