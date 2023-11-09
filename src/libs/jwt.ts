import {
  SignJWT,
  jwtVerify,
  JWTPayload,
  KeyLike,
} from 'jose';

export const ALGORITHM = 'RS256';

export async function signJwt(payload: JWTPayload, secretKey: KeyLike, iss: string, aud: string, expiresIn: string = '10m'): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: ALGORITHM })
    .setIssuedAt()
    .setIssuer(iss)
    .setAudience(aud)
    .setExpirationTime(expiresIn)
    .sign(secretKey)

  return jwt;
}

export async function verifyJwt(jwt: string, secretKey: KeyLike, iss: string, aud: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(jwt, secretKey, {
    issuer: iss,
    audience: aud,
  });

  return payload;
}
