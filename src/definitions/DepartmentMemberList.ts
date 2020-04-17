import { ExtensionInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class DepartmentMemberList
{
  /**
   * Link to the list of department members
   */
  uri?: string

  /**
   * List of department members extensions
   */
  records?: ExtensionInfo[]

  /**
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo
}

export default DepartmentMemberList
