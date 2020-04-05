import GetExtensionInfoResponse from './GetExtensionInfoResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionListResponse
{
    /**
     * Link to the extension list resource
     */
    uri?: string

    /**
     * List of extensions with extension information
     * Required
     */
    records?: GetExtensionInfoResponse[]

    /**
     * Information on navigation
     */
    navigation?: ProvisioningNavigationInfo

    /**
     * Information on paging
     */
    paging?: ProvisioningPagingInfo
}

export default GetExtensionListResponse