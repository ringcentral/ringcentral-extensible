import LocationInfo from './LocationInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetLocationListResponse
{
    /// <summary>
    /// Link to the location list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of locations
    /// </summary>
    records: LocationInfo[]

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

export default GetLocationListResponse