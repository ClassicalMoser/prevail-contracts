import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Runtime validators for a POST route's inputs and outputs. */
interface PostRouteValidators<
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
 * Contract for a POST HTTP route that returns 200 OK on success.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link PostRouteValidators} must parse values as those same types at runtime.
 */
interface PostRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TReturnData,
> {
  /** Route path, e.g. `/games`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'POST';
  /** HTTP status code returned on success. */
  successStatus: 200;
  validators: PostRouteValidators<TParams, TQuery, TBody, TReturnData>;
}

/**
 * Contract for a POST HTTP route that returns 201 Created on success.
 */
interface CreatedPostRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TReturnData,
> {
  /** Route path, e.g. `/games`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'POST';
  /** HTTP status code returned on success. */
  successStatus: 201;
  validators: PostRouteValidators<TParams, TQuery, TBody, TReturnData>;
}

export type { PostRoute, CreatedPostRoute, PostRouteValidators };
