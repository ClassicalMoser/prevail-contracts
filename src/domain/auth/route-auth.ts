import type { Permission } from './permissions';

interface NoAuthRequired {
  authRequired: false;
}

interface AuthRequired {
  authRequired: true;
  permissionsRequired: Permission[];
}

type RouteAuth = NoAuthRequired | AuthRequired;

export type { NoAuthRequired, AuthRequired, RouteAuth };
