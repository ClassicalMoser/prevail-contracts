import type { DeleteRoute } from './delete-route';
import type { GetRoute } from './get-route';
import type { PatchRoute } from './patch-route';
import type { PostRoute } from './post-route';
import type { PutRoute } from './put-route';

/** Any supported HTTP route contract. */
type Route =
  | GetRoute<unknown, unknown, unknown>
  | PostRoute<unknown, unknown, unknown, unknown>
  | PutRoute<unknown, unknown, unknown, unknown>
  | PatchRoute<unknown, unknown, unknown, unknown>
  | DeleteRoute<unknown, unknown, unknown>;

export type { Route };
