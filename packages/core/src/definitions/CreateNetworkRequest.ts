import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import PublicIpRangeInfo from './PublicIpRangeInfo';
import PrivateIpRangeInfoRequest from './PrivateIpRangeInfoRequest';
import ERLLocationInfo from './ERLLocationInfo';

interface CreateNetworkRequest {
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
  privateIpRanges?: PrivateIpRangeInfoRequest[];

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}

export default CreateNetworkRequest;
