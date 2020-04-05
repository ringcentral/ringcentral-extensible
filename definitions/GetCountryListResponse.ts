import GetCountryInfoDictionaryResponse from './GetCountryInfoDictionaryResponse'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetCountryListResponse
{
    /// <summary>
    /// Link to the list of countries supported
    /// </summary>
    uri: string

    /// <summary>
    /// List of countries with the country data
    /// Required
    /// </summary>
    records: GetCountryInfoDictionaryResponse[]

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

export default GetCountryListResponse