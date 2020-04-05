import CompanyPhoneNumberInfo from './CompanyPhoneNumberInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class AccountPhoneNumbers
{
    /// <summary>
    /// Link to the list of account phone numbers
    /// </summary>
    uri: string

    /// <summary>
    /// List of account phone numbers
    /// </summary>
    records: CompanyPhoneNumberInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default AccountPhoneNumbers