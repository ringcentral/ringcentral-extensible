import GrantInfo from './GrantInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionGrantListResponse
{
    /// <summary>
    /// Link to the list of extension grants
    /// </summary>
    uri: string

    /// <summary>
    /// List of extension grants with details
    /// Required
    /// </summary>
    records: GrantInfo[]

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

export default GetExtensionGrantListResponse