import type { Route } from '@domain';
import { getCurrentUnitCardsContract } from './get-current-unit-cards';
import {
  getUnitCardByIdContract,
  getUnitCardsByIdsContract,
} from './get-unit-card-by-id';
import { createEmptyUnitCardContract } from './create-empty-unit-card';
import { createUnitCardVersionContract } from './create-unit-card-version';
import { certifyLatestUnitCardVersionsContract } from './certify-latest-unit-card-versions';
import { previewUnitCardContract } from './generate-unit-card-preview-contract';

const unitCardContracts: readonly Route[] = [
  getCurrentUnitCardsContract,
  getUnitCardByIdContract,
  getUnitCardsByIdsContract,
  createEmptyUnitCardContract,
  createUnitCardVersionContract,
  certifyLatestUnitCardVersionsContract,
  previewUnitCardContract,
] as const;

export { unitCardContracts };
