import type { Route } from '@domain';
import { getCurrentCommandCardsContract } from './get-current-command-cards';
import {
  getCommandCardByIdContract,
  getCommandCardsByIdsContract,
} from './get-command-card-by-id';
import { createEmptyCommandCardContract } from './create-empty-command-card';
import { createCommandCardVersionContract } from './create-command-card-version';
import { updateCommandCardCertificationsContract } from './update-command-card-certifications';
import { previewCommandCardContract } from './generate-command-card-preview-contract';
import { getAllCommandCardsContract } from './get-all';
import { deleteEmptyCommandCardsContract } from './delete-empty-command-cards';

const commandCardContracts: readonly Route[] = [
  getAllCommandCardsContract,
  getCurrentCommandCardsContract,
  getCommandCardByIdContract,
  getCommandCardsByIdsContract,
  createEmptyCommandCardContract,
  createCommandCardVersionContract,
  updateCommandCardCertificationsContract,
  previewCommandCardContract,
  deleteEmptyCommandCardsContract,
] as const;

export { commandCardContracts };
