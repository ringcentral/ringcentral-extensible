import {
  EmergencyLocationInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class EmergencyLocationList {
  /**
   */
  records?: EmergencyLocationInfo[];

  /**
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo;
}

export default EmergencyLocationList;
