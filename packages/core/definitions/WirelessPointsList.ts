import {
  WirelessPointInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class WirelessPointsList {
  /**
   * Link to the wireless point list resource
   */
  uri?: string;

  /**
   * List of wireless points with assigned emergency addresses
   */
  records?: WirelessPointInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default WirelessPointsList;
