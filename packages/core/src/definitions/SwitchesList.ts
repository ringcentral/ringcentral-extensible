import { SwitchInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from './index';

class SwitchesList {
  /**
   * Link to the switches list resource
   */
  uri?: string;

  /**
   * Switches map
   */
  records?: SwitchInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}
export default SwitchesList;
