import type { DeleteRouteDefinition } from './delete-route';
import type { GetRouteDefinition } from './get-route';
import type { PatchRouteDefinition } from './patch-route';
import type { PostRouteDefinition } from './post-route';
import type { PutRouteDefinition } from './put-route';

type RouteDefinition<TParams, TQuery, TBody, TResponse> =
  | GetRouteDefinition<TParams, TQuery, TResponse>
  | PostRouteDefinition<TParams, TQuery, TBody, TResponse>
  | PutRouteDefinition<TParams, TQuery, TBody, TResponse>
  | PatchRouteDefinition<TParams, TQuery, TBody, TResponse>
  | DeleteRouteDefinition<TParams, TQuery, TResponse>;

export type { RouteDefinition };
