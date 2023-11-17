import type { IdToken } from '@atomicjolt/lti-types';
import type {
  LTIStorageParams,
  InitSettings,
  LaunchSettings,
} from '@atomicjolt/lti-client/types';

export type { IdToken } from '@atomicjolt/lti-types';

export interface Platform {
  iss: string;
  jwksUrl: string;
  tokenUrl: string;
  oidcUrl: string;
}

export interface Platforms {
  [key: string]: Platform;
}

export interface OIDCState {
  state: string;
  nonce: string;
  datetime: string;
}

export interface LTIRequestBody {
  state: string;
  id_token: string;
  lti_storage_target: string;
}

export interface JwtValidationResult {
  verified: Boolean;
  token: any | null;
  error: string | null;
};

export interface RedirectParams {
  idToken: string;
  state: string;
  ltiStorageTarget: string;
}

export interface KeySet {
  publicKey: string;
  privateKey: string;
}

export interface jwkResult {
  kty: string;
  kid: string;
  use: string;
  alg: string;
  e: string;
  n: string;
  d: string;
  p: string;
  q: string;
  dp: string;
  dq: string;
  qi: string;
}

export interface jwksResult {
  keys: jwkResult[];
}
