import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Runtime validators for a PATCH route's inputs and outputs. */
interface PatchRouteValidators<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TReturnData,
> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
  /** Validates the request body. */
  body: z.ZodSchema<TBody>;
  /** Validates the success response body. */
  data: z.ZodSchema<TReturnData>;
}

/**
 * Contract for a PATCH HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link PatchRouteValidators} must parse values as those same types at runtime.
 */
interface PatchRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TReturnData,
> {
  /** Route path, e.g. `/games/:id`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'PATCH';
  validators: PatchRouteValidators<TParams, TQuery, TBody, TReturnData>;
}

export type { PatchRoute, PatchRouteValidators };
