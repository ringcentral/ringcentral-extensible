import { CallMonitoringGroup, ProvisioningNavigationInfo, ProvisioningPagingInfo } from '.'

class CallMonitoringGroups
{
  /**
   * Link to a call monitoring groups resource
   * Required
   */
  uri?: string

  /**
   * List of call monitoring group members
   * Required
   */
  records?: CallMonitoringGroup[]

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

export default CallMonitoringGroups
