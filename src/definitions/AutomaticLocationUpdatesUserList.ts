import { AutomaticLocationUpdatesUserInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class AutomaticLocationUpdatesUserList {
  /**
   * Link to the users list resource
   */
  uri?: string

  /**
   */
  records?: AutomaticLocationUpdatesUserInfo[]

  /**
   */
  navigation?: ProvisioningNavigationInfo

  /**
   */
  paging?: ProvisioningPagingInfo
}

export default AutomaticLocationUpdatesUserList
