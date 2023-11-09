import type { KeySet, JWKS_RESULT, IdTokenResult } from '../../types';
import { JSONWebKeySet } from 'jose';
export declare function generateKeySet(): Promise<KeySet>;
export declare function keySetsToJwks(keySets: KeySet[]): Promise<JSONWebKeySet>;
export declare function fetchRemoteJwks(jwksUrl: string): Promise<JWKS_RESULT>;
export declare function verifyJwtUsingJwks(jwks: JSONWebKeySet, jwt: string): Promise<IdTokenResult>;
//# sourceMappingURL=jwks.d.ts.map