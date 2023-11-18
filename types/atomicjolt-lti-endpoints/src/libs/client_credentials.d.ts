import { KeyLike } from 'jose';
import { ClientAuthorizationResponse } from '@atomicjolt/lti-server/types';
import { EnvBindings } from '../../types';
export declare function requestServiceTokenCached(env: EnvBindings, clientId: string, platformTokenUrl: string, scopes: string, kid: string, rsaPrivateKey: KeyLike): Promise<ClientAuthorizationResponse>;
//# sourceMappingURL=client_credentials.d.ts.map