import CallMonitoringGroupMemberInfo from './CallMonitoringGroupMemberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class CallMonitoringGroupMemberList
{
    /// <summary>
    /// Link to a call monitoring group members resource
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// List of a call monitoring group members
    /// Required
    /// </summary>
    records: CallMonitoringGroupMemberInfo[]

    /// <summary>
    /// Information on navigation
    /// Required
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// Required
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default CallMonitoringGroupMemberList