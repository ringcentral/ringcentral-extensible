import UserPhoneNumberInfo from './UserPhoneNumberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionPhoneNumbersResponse
{
    /// <summary>
    /// Link to the user's phone number list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of phone numbers
    /// Required
    /// </summary>
    records: UserPhoneNumberInfo[]

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

export default GetExtensionPhoneNumbersResponse