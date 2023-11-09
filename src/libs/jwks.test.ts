import { expect, it, describe } from 'vitest';
import {
  verifyJwtUsingJwks, generateKeySet, keySetsToJwks
} from './jwks';
import { genJwt } from '../tests/helper';


describe('jwks', () => {
  it('generates a jwkset', async () => {
    const keySet = await generateKeySet();
    expect(keySet).toBeTruthy();
  });

  it('generates jwks given a keyset', async () => {
    const keySet = await generateKeySet();
    const jwks = await keySetsToJwks([keySet]);
    expect(jwks).toBeTruthy();
  });

  it('signs using signJwt and then decodes using verifyJwtUsingJwks', async () => {
    const { keySet, signed } = await genJwt();
    const jwks = await keySetsToJwks([keySet]);
    const decodedResult = await verifyJwtUsingJwks(jwks, signed);
    expect(decodedResult.verified).toEqual(true);
  });
});
