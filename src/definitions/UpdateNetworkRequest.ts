import {
  AutomaticLocationUpdatesSiteInfo,
  PublicIpRangeInfo,
  PrivateIpRangeInfoRequest,
  ERLLocationInfo,
} from '.';

class UpdateNetworkRequest {
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
   * Emergency response location information
   */
  emergencyLocation?: ERLLocationInfo;
}

export default UpdateNetworkRequest;
