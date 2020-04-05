import LanguageInfo from './LanguageInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class LanguageList
{
    /// <summary>
    /// Canonical URI of the language list resource
    /// </summary>
    uri: string

    /// <summary>
    /// Language data
    /// </summary>
    records: LanguageInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default LanguageList