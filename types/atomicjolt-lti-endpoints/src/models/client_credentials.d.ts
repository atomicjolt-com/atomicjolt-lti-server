import type { ClientAuthorizationResponse } from '@atomicjolt/lti-server/types';
import type { EnvBindings } from '../../types';
export declare function setClientCredential(env: EnvBindings, clientId: string, clientAuth: ClientAuthorizationResponse): Promise<void>;
export declare function getClientCredential(env: EnvBindings, clientId: string): Promise<ClientAuthorizationResponse | null>;
export declare function deleteClientCredential(env: EnvBindings, state: string): Promise<void>;
//# sourceMappingURL=client_credentials.d.ts.map