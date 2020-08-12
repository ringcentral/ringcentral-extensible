import {
  AutomaticLocationUpdatesSiteInfo,
  PublicIpRangeInfo,
  PrivateIpRangeInfoRequest,
  ERLLocationInfo,
} from './index';

class CreateNetworkRequest {
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

export default CreateNetworkRequest;
