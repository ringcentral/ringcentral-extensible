import AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo.js";
import PublicIpRangeInfo from "./PublicIpRangeInfo.js";
import PrivateIpRangeInfo from "./PrivateIpRangeInfo.js";

interface NetworkInfo {
  /**
   * Internal identifier of a network
   */
  id?: string;

  /**
   * Link to a network resource
   * Format: uri
   */
  uri?: string;

  /** */
  name?: string;

  /** */
  site?: AutomaticLocationUpdatesSiteInfo;

  /** */
  publicIpRanges?: PublicIpRangeInfo[];

  /** */
  privateIpRanges?: PrivateIpRangeInfo[];
}

export default NetworkInfo;
