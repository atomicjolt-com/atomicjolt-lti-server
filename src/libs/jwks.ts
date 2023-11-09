import type { KeySet, JWKS_RESULT, IdTokenResult, IdToken } from '../../types';
import {
  generateKeyPair,
  importSPKI,
  exportSPKI,
  exportPKCS8,
  exportJWK,
  calculateJwkThumbprint,
  jwtVerify,
  createLocalJWKSet,
  JSONWebKeySet,
} from 'jose';
import { ALGORITHM } from './jwt';

export async function generateKeySet(): Promise<KeySet> {
  const { publicKey, privateKey } = await generateKeyPair(ALGORITHM, { extractable: true });
  const pub = await exportSPKI(publicKey);
  const pri = await exportPKCS8(privateKey);

  return {
    publicKey: pub,
    privateKey: pri,
  };
}

export async function keySetsToJwks(keySets: KeySet[]): Promise<JSONWebKeySet> {
  const jwks = await Promise.all(keySets.map(async (ks) => {
    const pub = await importSPKI(ks.publicKey, ALGORITHM, { extractable: true });
    const publicJwk = await exportJWK(pub);
    const kid = await calculateJwkThumbprint(publicJwk);
    return {
      ...publicJwk,
      kid,
      use: 'sig',
      alg: ALGORITHM,
    };
  }));

  const result: JSONWebKeySet = {
    keys: jwks,
  };

  return result;
}

export async function fetchRemoteJwks(jwksUrl: string): Promise<JWKS_RESULT> {
  const resp = await fetch(jwksUrl);
  if (resp.ok) {
    const jwks = await resp.json();
    return jwks as JWKS_RESULT;
  }
  throw (`Unable to retrieve JWKS from ${jwksUrl}`);
}

export async function verifyJwtUsingJwks(jwks: JSONWebKeySet, jwt: string): Promise<IdTokenResult> {
  const localJwks = createLocalJWKSet(jwks);
  try {
    const payload = await jwtVerify(jwt, localJwks);
    const token = payload as unknown as IdToken;
    return {
      verified: true,
      token,
      error: null,
    };
  } catch (e) {
    const error = (e as Error).toString();
    return {
      verified: false,
      token: null,
      error,
    };
  }
}
