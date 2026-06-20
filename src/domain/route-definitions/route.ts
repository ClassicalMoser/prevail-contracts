import type { DeleteRoute } from './delete-route';
import type { GetRoute } from './get-route';
import type { PatchRoute } from './patch-route';
import type { PostRoute } from './post-route';
import type { PutRoute } from './put-route';

/** Any supported HTTP route contract. */
type Route =
  | GetRoute<Record<string, unknown>, Record<string, unknown>, unknown>
  | PostRoute<
      Record<string, unknown>,
      Record<string, unknown>,
      unknown,
      unknown
    >
  | PutRoute<Record<string, unknown>, Record<string, unknown>, unknown, unknown>
  | PatchRoute<
      Record<string, unknown>,
      Record<string, unknown>,
      unknown,
      unknown
    >
  | DeleteRoute<Record<string, unknown>, Record<string, unknown>, unknown>;

export type { Route };
