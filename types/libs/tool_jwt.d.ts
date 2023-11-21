import { DeepLinkingClaim } from "@atomicjolt/lti-types";
export type ToolJwt = {
    clientId: string;
    deploymentId: string;
    iss: string;
    aud: string;
    sub: string;
    exp: number;
    iat: number;
    platformIss: string;
    namesAndRolesEndpointUrl?: string;
    deepLinkClaimData?: DeepLinkingClaim;
};
export declare function getDefaultToolJwt(clientId: string, deploymentId: string, iss: string, sub: string, platformIss: string, namesAndRolesEndpointUrl: string | undefined, deepLinkClaimData: DeepLinkingClaim | undefined): ToolJwt;
//# sourceMappingURL=tool_jwt.d.ts.map