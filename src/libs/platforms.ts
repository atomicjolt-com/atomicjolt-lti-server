// import { LTIStorageParams } from '../types';
import type { 
  LTIStorageParams,
} from '@atomicjolt/lti-client/types';

// Set to true to set the targetOrigin on postMessage calls.The LTI spec
// requires this, but Canvas doesn't currently support it.
export const SET_POST_MESSAGE_ORIGIN = true;

export function getLtiStorageParams(platformOIDCUrl: string, target: string): LTIStorageParams {
  const ltiStorageParams: LTIStorageParams = {
    target,
    originSupportBroken: !SET_POST_MESSAGE_ORIGIN,
    platformOIDCUrl,
  };
  return ltiStorageParams;
}