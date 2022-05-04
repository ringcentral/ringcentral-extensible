import {
  AutomaticLocationUpdatesSiteInfo, PublicIpRangeInfo, PrivateIpRangeInfoRequest, ERLLocationInfo,
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
   */
  emergencyLocation?: ERLLocationInfo;
}
export default CreateNetworkRequest;
