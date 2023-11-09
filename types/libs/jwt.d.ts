import { JWTPayload, KeyLike } from 'jose';
export declare const ALGORITHM = "RS256";
export declare function signJwt(payload: JWTPayload, secretKey: KeyLike, iss: string, aud: string, expiresIn?: string): Promise<string>;
export declare function verifyJwt(jwt: string, secretKey: KeyLike, iss: string, aud: string): Promise<JWTPayload>;
//# sourceMappingURL=jwt.d.ts.map