import AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo";
import PublicIpRangeInfo from "./PublicIpRangeInfo";
import PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest";

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
