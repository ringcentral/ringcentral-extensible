import { CallMonitoringGroupMemberInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class CallMonitoringGroupMemberList {
  /**
   * Link to a call monitoring group members resource
   * Required
   */
  uri?: string

  /**
   * List of a call monitoring group members
   * Required
   */
  records?: CallMonitoringGroupMemberInfo[]

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

export default CallMonitoringGroupMemberList
