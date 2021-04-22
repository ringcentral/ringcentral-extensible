import {
  AutomaticLocationUpdatesSiteInfo,
  PublicIpRangeInfo,
  PrivateIpRangeInfoRequest,
  ERLLocationInfo,
} from './index';

class UpdateNetworkRequest {
  /**
   * Internal identifier of a network
   */
  id?: string;

  /**
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
  privateIpRanges?: PrivateIpRangeInfoRequest[];

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}

export default UpdateNetworkRequest;
