import PagingGroupExtensionInfo from './PagingGroupExtensionInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class PagingOnlyGroupUsers
{
    /// <summary>
    /// Link to the list of users allowed to page the Paging Only group
    /// </summary>
    uri: string

    /// <summary>
    /// List of users allowed to page the Paging Only group
    /// </summary>
    records: PagingGroupExtensionInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default PagingOnlyGroupUsers