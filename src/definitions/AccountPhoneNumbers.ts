import CompanyPhoneNumberInfo from './CompanyPhoneNumberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class AccountPhoneNumbers
{
    /**
     * Link to the list of account phone numbers
     */
    uri?: string

    /**
     * List of account phone numbers
     */
    records?: CompanyPhoneNumberInfo[]

    /**
     * Information on navigation
     */
    navigation?: ProvisioningNavigationInfo

    /**
     * Information on paging
     */
    paging?: ProvisioningPagingInfo
}

export default AccountPhoneNumbers