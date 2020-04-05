import CallQueueInfo from './CallQueueInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class CallQueues
{
    /// <summary>
    /// Link to a call queues resource
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// List of call queues
    /// Required
    /// </summary>
    records: CallQueueInfo[]

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

export default CallQueues