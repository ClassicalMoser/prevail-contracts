import type { Route } from '@domain';
import { commandCardContracts } from './command-cards';

const httpContracts: readonly Route[] = [...commandCardContracts];

export { httpContracts };
