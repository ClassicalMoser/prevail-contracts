import type { RouteAuth } from '@domain/auth';
import type { Response } from '@domain/response';
import type { z } from 'zod';

interface DeleteRoute<TParams, TQuery, TResponse> {
  path: string;
  auth: RouteAuth;
  method: 'DELETE';
  params: TParams;
  query: TQuery;
  response: Response<TResponse>;
}

interface DeleteRouteValidators<TParams, TQuery, TResponse> {
  params: z.ZodSchema<TParams>;
  query: z.ZodSchema<TQuery>;
  response: z.ZodSchema<Response<TResponse>>;
}

interface DeleteRouteDefinition<TParams, TQuery, TResponse> {
  route: DeleteRoute<TParams, TQuery, TResponse>;
  validators: DeleteRouteValidators<TParams, TQuery, TResponse>;
}

export type { DeleteRoute, DeleteRouteDefinition, DeleteRouteValidators };
