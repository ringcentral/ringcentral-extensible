import GetStateInfoResponse from './GetStateInfoResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetStateListResponse
{
    /// <summary>
    /// Link to the states list resource
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// List of states
    /// Required
    /// </summary>
    records: GetStateInfoResponse[]

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

export default GetStateListResponse