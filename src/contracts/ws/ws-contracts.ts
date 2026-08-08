import type { WsContract } from '@domain';
import { gameWsContracts } from './games';

const wsContracts: readonly WsContract[] = [...gameWsContracts];

export { wsContracts };
