import {
  EmergencyLocationInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

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
