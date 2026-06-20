import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

interface GetRoute<TParams, TQuery, TResponse> {
  path: string;
  auth: RouteAuth;
  method: 'GET';
  params: TParams;
  query: TQuery;
  response: Response<TResponse>;
}

interface GetRouteValidators<TParams, TQuery, TResponse> {
  params: z.ZodSchema<TParams>;
  query: z.ZodSchema<TQuery>;
  response: z.ZodSchema<Response<TResponse>>;
}

interface GetRouteDefinition<TParams, TQuery, TResponse> {
  route: GetRoute<TParams, TQuery, TResponse>;
  validators: GetRouteValidators<TParams, TQuery, TResponse>;
}

export type { GetRoute, GetRouteDefinition, GetRouteValidators };
