import type AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo.js";
import type PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest.js";
import type PublicIpRangeInfo from "./PublicIpRangeInfo.js";

interface CreateNetworkRequest {
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

export default CreateNetworkRequest;
