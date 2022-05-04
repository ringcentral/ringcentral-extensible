import { PagingGroupExtensionInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from './index';

class PagingOnlyGroupUsers {
  /**
   * Link to the list of users allowed to page the Paging Only group
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
