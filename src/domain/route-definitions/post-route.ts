import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

/** Runtime validators for a POST route's inputs and outputs. */
interface PostRouteValidators<TParams, TQuery, TBody, TReturnData> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
  /** Validates the request body. */
  body: z.ZodSchema<TBody>;
  /** Validates the success payload (`Response.data`). */
  returnData: z.ZodSchema<TReturnData>;
  /** Validates the full response envelope (success or error). */
  response: z.ZodSchema<Response<TReturnData>>;
}

/**
 * Contract for a POST HTTP route.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link PostRouteValidators} must parse values as those same types at runtime.
 */
interface PostRoute<TParams, TQuery, TBody, TReturnData> {
  /** Route path, e.g. `/games`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'POST';
  validators: PostRouteValidators<TParams, TQuery, TBody, TReturnData>;
}

export type { PostRoute, PostRouteValidators };
