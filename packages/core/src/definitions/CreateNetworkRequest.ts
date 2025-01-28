import AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo";
import PublicIpRangeInfo from "./PublicIpRangeInfo";
import PrivateIpRangeInfoRequest from "./PrivateIpRangeInfoRequest";

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
