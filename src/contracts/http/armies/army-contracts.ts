import type { Route } from '@domain';
import { archiveOwnedArmyContract } from './archive-owned-army';
import { createOwnedArmyContract } from './create-owned-army';
import { getOwnedArmiesContract } from './get-owned-armies';
import { getOwnedArmyByIdContract } from './get-owned-army-by-id';
import { updateOwnedArmyContract } from './update-owned-army';

const armyContracts: readonly Route[] = [
  getOwnedArmiesContract,
  getOwnedArmyByIdContract,
  createOwnedArmyContract,
  updateOwnedArmyContract,
  archiveOwnedArmyContract,
] as const;

export { armyContracts };
