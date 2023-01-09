import AutomaticLocationUpdatesDeviceInfo from './AutomaticLocationUpdatesDeviceInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface ListDevicesAutomaticLocationUpdates {
  /**
   * Link to a devices resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of the user(s) devices with the current status of Emergency
 *  Address Auto Update Feature
   */
  records?: AutomaticLocationUpdatesDeviceInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default ListDevicesAutomaticLocationUpdates;
