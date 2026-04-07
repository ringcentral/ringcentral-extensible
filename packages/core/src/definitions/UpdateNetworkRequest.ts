import type AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo.js";
import type PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest.js";
import type PublicIpRangeInfo from "./PublicIpRangeInfo.js";

interface UpdateNetworkRequest {
  /**
   * Internal identifier of a network
   * Example: 2874044
   */
  id?: string;

  /**
   * Required
   */
  name?: string;

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   * Required
   */
  publicIpRanges?: PublicIpRangeInfo[];

  /**
   * Required
   */
  privateIpRanges?: PrivateIpRangeInfoRequest[];
}

export default UpdateNetworkRequest;
