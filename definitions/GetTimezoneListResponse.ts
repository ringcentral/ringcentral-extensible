import GetTimezoneInfoResponse from './GetTimezoneInfoResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetTimezoneListResponse
{
    /// <summary>
    /// Link to the timezone list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of timezones
    /// Required
    /// </summary>
    records: GetTimezoneInfoResponse[]

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

export default GetTimezoneListResponse