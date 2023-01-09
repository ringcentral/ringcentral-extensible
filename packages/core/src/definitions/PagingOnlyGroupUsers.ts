import PagingGroupExtensionInfo from './PagingGroupExtensionInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface PagingOnlyGroupUsers {
  /**
   * Link to a list of users allowed to page the Paging Only group
   * Format: uri
   */
  uri?: string;

  /**
   * List of users allowed to page the Paging Only group
   */
  records?: PagingGroupExtensionInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default PagingOnlyGroupUsers;
