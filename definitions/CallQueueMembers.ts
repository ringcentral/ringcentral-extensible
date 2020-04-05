import CallQueueMemberInfo from './CallQueueMemberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class CallQueueMembers
{
    /// <summary>
    /// Link to a call queue members resource
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// List of call queue members
    /// Required
    /// </summary>
    records: CallQueueMemberInfo[]

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

export default CallQueueMembers