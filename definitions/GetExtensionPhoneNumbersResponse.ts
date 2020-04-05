import UserPhoneNumberInfo from './UserPhoneNumberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class GetExtensionPhoneNumbersResponse
{
    /**
     * Link to the user's phone number list resource
     */
    uri: string

    /**
     * List of phone numbers
     * Required
     */
    records: UserPhoneNumberInfo[]

    /**
     * Information on navigation
     * Required
     */
    navigation: ProvisioningNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging: ProvisioningPagingInfo
}

export default GetExtensionPhoneNumbersResponse