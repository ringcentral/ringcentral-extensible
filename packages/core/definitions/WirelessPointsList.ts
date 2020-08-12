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
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo;
}

export default WirelessPointsList;
