import SwitchInfo from './SwitchInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface SwitchesList {
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
