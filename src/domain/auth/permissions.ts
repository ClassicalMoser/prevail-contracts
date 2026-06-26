const PERMISSIONS = [
  'cards:create-version',
  'cards:create-card',
  'cards:delete-card',
  'cards:certify',
  'armies:create-owned-army',
  'armies:update-owned-army',
  'armies:archive-owned-army',
  'game:play',
] as const;

type Permission = (typeof PERMISSIONS)[number];

export { PERMISSIONS };
export type { Permission };
