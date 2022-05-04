import EmergencyLocationInfo from './EmergencyLocationInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

class EmergencyLocationList {
  /**
   * Link to the emergency location list resource
   */
  uri?: string;

  /**
   */
  records?: EmergencyLocationInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default EmergencyLocationList;
