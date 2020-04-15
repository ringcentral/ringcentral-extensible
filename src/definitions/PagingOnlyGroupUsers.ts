import PagingGroupExtensionInfo from './PagingGroupExtensionInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class PagingOnlyGroupUsers
{
  /**
   * Link to the list of users allowed to page the Paging Only group
   */
  uri?: string

  /**
   * List of users allowed to page the Paging Only group
   */
  records?: PagingGroupExtensionInfo[]

  /**
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo
}

export default PagingOnlyGroupUsers