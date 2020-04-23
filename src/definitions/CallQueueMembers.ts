import { CallQueueMemberInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class CallQueueMembers {
  /**
   * Link to a call queue members resource
   * Required
   */
  uri?: string

  /**
   * List of call queue members
   * Required
   */
  records?: CallQueueMemberInfo[]

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

export default CallQueueMembers
