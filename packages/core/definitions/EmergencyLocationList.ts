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
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default EmergencyLocationList;
