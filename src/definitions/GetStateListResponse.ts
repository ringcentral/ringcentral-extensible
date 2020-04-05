import GetStateInfoResponse from './GetStateInfoResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetStateListResponse
{
    /**
     * Link to the states list resource
     * Required
     */
    uri?: string

    /**
     * List of states
     * Required
     */
    records?: GetStateInfoResponse[]

    /**
     * Information on navigation
     * Required
     */
    navigation?: ProvisioningNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging?: ProvisioningPagingInfo
}

export default GetStateListResponse