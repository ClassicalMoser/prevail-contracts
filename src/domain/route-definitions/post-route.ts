import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

interface PostRoute<TParams, TQuery, TBody, TResponse> {
  path: string;
  auth: RouteAuth;
  method: 'POST';
  params: TParams;
  query: TQuery;
  body: TBody;
  response: Response<TResponse>;
}

interface PostRouteValidators<TParams, TQuery, TBody, TResponse> {
  params: z.ZodSchema<TParams>;
  query: z.ZodSchema<TQuery>;
  body: z.ZodSchema<TBody>;
  response: z.ZodSchema<Response<TResponse>>;
}

interface PostRouteDefinition<TParams, TQuery, TBody, TResponse> {
  route: PostRoute<TParams, TQuery, TBody, TResponse>;
  validators: PostRouteValidators<TParams, TQuery, TBody, TResponse>;
}

export type { PostRoute, PostRouteDefinition, PostRouteValidators };
