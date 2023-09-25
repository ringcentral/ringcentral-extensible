import type AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import type PublicIpRangeInfo from './PublicIpRangeInfo';
import type PrivateIpRangeInfoRequest from './PrivateIpRangeInfoRequest';
import type ERLLocationInfo from './ERLLocationInfo';

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
