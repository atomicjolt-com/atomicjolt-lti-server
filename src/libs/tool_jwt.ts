import { DeepLinkingClaim } from "@atomicjolt/lti-types";
import { ToolJwt } from "../../types";

// Build a default tool jwt
// client_id: The client_id of the tool
// deployment_id: The deployment_id of the tool
// iss: The issuer of the JWT. Recommended: const iss = (new URL(host)).host;
// sub: The subject of the JWT. Set this to the iss value since the issuer and audience are the same.
// platform_iss: The issuer of the platform. ex: https://canvas.instructure.com
export function getDefaultToolJwt(
  clientId: string,
  deploymentId: string,
  iss: string,
  sub: string,
  platformIss: string,
  namesAndRolesEndpointUrl: string | undefined,
  deepLinkClaimData: DeepLinkingClaim | undefined,
): ToolJwt {
  const toolJwt: ToolJwt = {
    clientId,
    deploymentId,
    iss,
    aud: iss,
    sub,
    exp: (Date.now() / 1000) + (60 * 60), // 1 hour from now
    iat: Date.now() / 1000,
    namesAndRolesEndpointUrl,
    platformIss,
    deepLinkClaimData,
  };
  return toolJwt;
}