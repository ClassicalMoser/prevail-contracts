import type { Route } from '@domain';
import { getCurrentUnitCardsContract } from './get-current-unit-cards';
import {
  getUnitCardByIdContract,
  getUnitCardsByIdsContract,
} from './get-unit-card-by-id';
import { createEmptyUnitCardContract } from './create-empty-unit-card';
import { createUnitCardVersionContract } from './create-unit-card-version';
import { updateUnitCardCertificationsContract } from './update-unit-card-certifications';
import { previewUnitCardContract } from './generate-unit-card-preview-contract';
import { getAllUnitCardsContract } from './get-all';
import { deleteEmptyUnitCardsContract } from './delete-empty-unit-cards-contract';

const unitCardContracts: readonly Route[] = [
  getAllUnitCardsContract,
  getCurrentUnitCardsContract,
  getUnitCardByIdContract,
  getUnitCardsByIdsContract,
  createEmptyUnitCardContract,
  createUnitCardVersionContract,
  updateUnitCardCertificationsContract,
  previewUnitCardContract,
  deleteEmptyUnitCardsContract,
] as const;

export { unitCardContracts };
