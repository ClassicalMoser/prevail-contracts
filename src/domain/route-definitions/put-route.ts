import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

interface PutRoute<TParams, TQuery, TBody, TResponse> {
  path: string;
  auth: RouteAuth;
  method: 'PUT';
  params: TParams;
  query: TQuery;
  body: TBody;
  response: Response<TResponse>;
}

interface PutRouteValidators<TParams, TQuery, TBody, TResponse> {
  params: z.ZodSchema<TParams>;
  query: z.ZodSchema<TQuery>;
  body: z.ZodSchema<TBody>;
  response: z.ZodSchema<Response<TResponse>>;
}

interface PutRouteDefinition<TParams, TQuery, TBody, TResponse> {
  route: PutRoute<TParams, TQuery, TBody, TResponse>;
  validators: PutRouteValidators<TParams, TQuery, TBody, TResponse>;
}

export type { PutRoute, PutRouteDefinition, PutRouteValidators };
