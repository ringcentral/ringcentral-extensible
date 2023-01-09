import PagingDeviceInfo from './PagingDeviceInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface PagingOnlyGroupDevices {
  /**
   * Link to a list of devices assigned to the paging only group
   * Format: uri
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
