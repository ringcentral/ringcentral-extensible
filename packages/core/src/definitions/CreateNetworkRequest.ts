import AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo.js";
import PublicIpRangeInfo from "./PublicIpRangeInfo.js";
import PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest.js";

interface CreateNetworkRequest {
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

export default CreateNetworkRequest;
