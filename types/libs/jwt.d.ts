import { JWTPayload, KeyLike } from 'jose';
export declare const ALGORITHM = "RS256";
export declare function signJwt(payload: JWTPayload, secretKey: KeyLike, expiresIn?: string, kid?: string): Promise<string>;
export declare function verifyJwt(jwt: string, secretKey: KeyLike, iss: string, aud: string): Promise<JWTPayload>;
export declare function getKid(jwt: string): string | null;
//# sourceMappingURL=jwt.d.ts.map