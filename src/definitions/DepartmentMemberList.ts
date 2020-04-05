import ExtensionInfo from './ExtensionInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class DepartmentMemberList
{
    /**
     * Link to the list of department members
     */
    uri?: string

    /**
     * List of department members extensions
     */
    records?: ExtensionInfo[]

    /**
     * Information on navigation
     */
    navigation?: ProvisioningNavigationInfo

    /**
     * Information on paging
     */
    paging?: ProvisioningPagingInfo
}

export default DepartmentMemberList