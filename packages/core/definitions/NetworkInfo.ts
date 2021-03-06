import {
  AutomaticLocationUpdatesSiteInfo,
  PublicIpRangeInfo,
  PrivateIpRangeInfo,
  ERLLocationInfo,
} from './index';

class NetworkInfo {
  /**
   * Internal identifier of a network
   */
  id?: string;

  /**
   * Link to a network resource
   */
  uri?: string;

  /**
   */
  name?: string;

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   */
  publicIpRanges?: PublicIpRangeInfo[];

  /**
   */
  privateIpRanges?: PrivateIpRangeInfo[];

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}
export default NetworkInfo;
