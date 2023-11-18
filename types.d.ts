import type { IdToken } from '@atomicjolt/lti-types';
import type {
  LTIStorageParams,
  InitSettings,
  LaunchSettings,
} from '@atomicjolt/lti-client/types';

export type { IdToken } from '@atomicjolt/lti-types';

export interface PlatformConfigurations {
  [key: string]: PlatformConfiguration;
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

export interface LTIInitBody {
  lti_storage_target: string;
  lti_message_hint: string;
  login_hint: string;
  client_id: string;
  iss: string;
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

export interface KeySetPair {
  kid: string,
  keySet: KeySet,
}

export interface KeySetMap {
  [kid: string]: KeySet;
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

//
// Types used to get an authorization token from the platform
//
export type ClientCredentials = {
  iss: string;      // A unique identifier for the entity that issued the JWT
  sub: string;      // "client_id" of the OAuth Client
  aud: string[];    // Authorization server identifier. Usually the token endpoint URL of the authorization server
  jti: string;      // A unique (potentially reusable) identifier for the token
};

export type ClientAuthorizationRequest = {
  grant_type: string;
  client_assertion_type: string;
  scope: string;
  client_assertion: string;
};

export type ClientAuthorizationResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};