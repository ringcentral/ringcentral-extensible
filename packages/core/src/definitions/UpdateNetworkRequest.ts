import AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo.js";
import PublicIpRangeInfo from "./PublicIpRangeInfo.js";
import PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest.js";

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

  /** */
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
