import {
  SignJWT,
  jwtVerify,
  JWTPayload,
  KeyLike,
} from 'jose';

export const ALGORITHM = 'RS256';

type Header = {
  alg: string;
  kid?: string;
};

export async function signJwt(payload: JWTPayload, secretKey: KeyLike, expiresIn: string = '10m', kid: string = ''): Promise<string> {
  const header: Header = { alg: ALGORITHM };
  if (kid) {
    header.kid = kid;
  }

  const jwt = await new SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .setExpirationTime(expiresIn);

  let signed = '';
  try {
    signed = await jwt.sign(secretKey);
  } catch (e) {
    console.error(e);
    throw new Error(`Unable to sign JWT: ${e}`);
  }

  return signed;
}

export async function verifyJwt(jwt: string, secretKey: KeyLike, iss: string, aud: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(jwt, secretKey, {
    issuer: iss,
    audience: aud,
  });

  return payload;
}

export function getKid(jwt: string): string | null {
  const [headerPart] = jwt.split('.');
  if (!headerPart) {
    return null;
  }
  const header = atob(headerPart);
  const decodedHeader = JSON.parse(header) as Header;
  return decodedHeader.kid || null;
}
