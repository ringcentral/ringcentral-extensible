import CallMonitoringGroup from './CallMonitoringGroup'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class CallMonitoringGroups
{
    /// <summary>
    /// Link to a call monitoring groups resource
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// List of call monitoring group members
    /// Required
    /// </summary>
    records: CallMonitoringGroup[]

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

export default CallMonitoringGroups