import type { Permission } from './permissions';
import { PERMISSIONS } from './permissions';

interface Role {
  name: string;
  permissions: readonly Permission[];
}

const SUPER_ADMIN_ROLE: Role = {
  name: 'super_admin',
  permissions: PERMISSIONS,
};

const PLAYER_ROLE: Role = {
  name: 'player',
  permissions: [
    'armies:create-owned-army',
    'armies:update-owned-army',
    'armies:archive-owned-army',
    'game:play',
  ],
};

export type { Role };
export { SUPER_ADMIN_ROLE, PLAYER_ROLE };
