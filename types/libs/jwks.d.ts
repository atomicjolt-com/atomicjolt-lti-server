import type { KeySet, JwtValidationResult } from '../../types';
import { JSONWebKeySet } from 'jose';
export declare function generateKeySet(): Promise<KeySet>;
export declare function keySetsToJwks(keySets: KeySet[]): Promise<JSONWebKeySet>;
export declare function fetchRemoteJwks(jwksUrl: string): Promise<JSONWebKeySet>;
export declare function verifyJwtUsingJwks(jwks: JSONWebKeySet, jwt: string): Promise<JwtValidationResult>;
//# sourceMappingURL=jwks.d.ts.map