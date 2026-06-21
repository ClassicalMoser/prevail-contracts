import type { RouteAuth } from '@domain/auth';
import type { z } from 'zod';

/** Maps each supported success content type to its in-memory payload shape. */
interface MediaPayloadMap {
  'image/svg+xml': string;
  'application/pdf': Uint8Array;
  'image/png': Uint8Array;
}

type MediaContentType = keyof MediaPayloadMap;

/** Success payload for a {@link MediaPostRoute}, from {@link MediaPayloadMap}. */
type MediaPayload<TContentType extends MediaContentType> =
  MediaPayloadMap[TContentType];

/** Runtime validators for a POST route whose success body is raw media, not JSON. */
interface MediaPostRouteValidators<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
> {
  /** Validates URL path parameters. */
  params: z.ZodSchema<TParams>;
  /** Validates query string parameters. */
  query: z.ZodSchema<TQuery>;
  /** Validates the request body. */
  body: z.ZodSchema<TBody>;
}

/**
 * Contract for a POST HTTP route that returns a raw media document on success.
 *
 * Generic parameters are the compile-time shapes handlers and clients use.
 * {@link MediaPostRouteValidators} must parse values as those same types at
 * runtime.
 *
 * The request body is JSON. Success is HTTP 200 with
 * {@link MediaPostRoute.successContentType} and a
 * {@link MediaPayload} body. Failures return `{ message: string }` as JSON;
 * HTTP status is on the response.
 */
interface MediaPostRoute<
  TParams extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
  TBody,
  TSuccessContentType extends MediaContentType,
> {
  /** Route path, e.g. `/command-cards/preview`. */
  path: string;
  /** Authentication and authorization requirements. */
  auth: RouteAuth;
  method: 'POST';
  /** MIME type of the success response body. */
  successContentType: TSuccessContentType;
  validators: MediaPostRouteValidators<TParams, TQuery, TBody>;
}

export type {
  MediaContentType,
  MediaPayload,
  MediaPostRoute,
  MediaPostRouteValidators,
};
