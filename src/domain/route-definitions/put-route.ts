import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Runtime validators for a PUT route's inputs and outputs. */
interface PutRouteValidators<
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
 * Contract for a PUT HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link PutRouteValidators} must parse values as those same types at runtime.
 */
interface PutRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TReturnData,
> {
  /** Route path, e.g. `/games/:id`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'PUT';
  validators: PutRouteValidators<TParams, TQuery, TBody, TReturnData>;
}

export type { PutRoute, PutRouteValidators };
