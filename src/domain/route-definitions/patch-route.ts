import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

interface PatchRoute<TParams, TQuery, TBody, TResponse> {
  path: string;
  auth: RouteAuth;
  method: 'PATCH';
  params: TParams;
  query: TQuery;
  body: TBody;
  response: Response<TResponse>;
}

interface PatchRouteValidators<TParams, TQuery, TBody, TResponse> {
  params: z.ZodSchema<TParams>;
  query: z.ZodSchema<TQuery>;
  body: z.ZodSchema<TBody>;
  response: z.ZodSchema<Response<TResponse>>;
}

interface PatchRouteDefinition<TParams, TQuery, TBody, TResponse> {
  route: PatchRoute<TParams, TQuery, TBody, TResponse>;
  validators: PatchRouteValidators<TParams, TQuery, TBody, TResponse>;
}

export type { PatchRoute, PatchRouteDefinition, PatchRouteValidators };
