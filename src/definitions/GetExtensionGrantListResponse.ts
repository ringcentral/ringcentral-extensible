import GrantInfo from './GrantInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionGrantListResponse
{
  /**
   * Link to the list of extension grants
   */
  uri?: string

  /**
   * List of extension grants with details
   * Required
   */
  records?: GrantInfo[]

  /**
   * Information on navigation
   * Required
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   * Required
   */
  paging?: ProvisioningPagingInfo
}

export default GetExtensionGrantListResponse
