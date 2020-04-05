import GetExtensionInfoResponse from './GetExtensionInfoResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionListResponse
{
    /// <summary>
    /// Link to the extension list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of extensions with extension information
    /// Required
    /// </summary>
    records: GetExtensionInfoResponse[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default GetExtensionListResponse