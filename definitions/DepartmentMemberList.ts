import ExtensionInfo from './ExtensionInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class DepartmentMemberList
{
    /// <summary>
    /// Link to the list of department members
    /// </summary>
    uri: string

    /// <summary>
    /// List of department members extensions
    /// </summary>
    records: ExtensionInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default DepartmentMemberList