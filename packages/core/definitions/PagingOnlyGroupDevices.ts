import {
  PagingDeviceInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class PagingOnlyGroupDevices {
  /**
   * Link to the list of devices assigned to the paging only group
   */
  uri?: string;

  /**
   * List of paging devices assigned to this group
   */
  records?: PagingDeviceInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}
export default PagingOnlyGroupDevices;
