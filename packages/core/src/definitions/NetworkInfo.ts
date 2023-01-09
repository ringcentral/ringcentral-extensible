import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import PublicIpRangeInfo from './PublicIpRangeInfo';
import PrivateIpRangeInfo from './PrivateIpRangeInfo';
import ERLLocationInfo from './ERLLocationInfo';

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
