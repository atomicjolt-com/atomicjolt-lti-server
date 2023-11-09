import { expect, it, describe } from 'vitest';
import {
  signJwt,
  verifyJwt,
} from './jwt';
import { KeyLike } from 'jose';
import { TEST_ID_TOKEN } from '../tests/helper';

describe('jwt', () => {
  const iss = 'issuer';
  const aud = 'audience';
  const expiresIn = '10m';
  const secretKey = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2') as unknown as KeyLike;
  const badSecretKey = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f59333') as unknown as KeyLike;

  it('should sign and verify JWT', async () => {
    const jwt = await signJwt(TEST_ID_TOKEN, secretKey, iss, aud, expiresIn);
    expect(jwt).toBeDefined();

    const verifiedPayload = await verifyJwt(jwt, secretKey, iss, aud);
    expect(verifiedPayload).toEqual(TEST_ID_TOKEN);
  });

  it('should fail to verify JWT with wrong secret', async () => {
    const jwt = await signJwt(TEST_ID_TOKEN, secretKey, iss, aud, expiresIn);
    expect(jwt).toBeDefined();

    await expect(verifyJwt(jwt, badSecretKey, iss, aud)).rejects.toThrow();
  });
});