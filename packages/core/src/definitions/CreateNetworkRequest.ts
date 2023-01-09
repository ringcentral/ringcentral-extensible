import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import PublicIpRangeInfo from './PublicIpRangeInfo';
import PrivateIpRangeInfoRequest from './PrivateIpRangeInfoRequest';
import ERLLocationInfo from './ERLLocationInfo';

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

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}

export default CreateNetworkRequest;
