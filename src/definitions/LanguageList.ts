import LanguageInfo from './LanguageInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class LanguageList
{
    /**
     * Canonical URI of the language list resource
     */
    uri?: string

    /**
     * Language data
     */
    records?: LanguageInfo[]

    /**
     * Information on navigation
     */
    navigation?: ProvisioningNavigationInfo

    /**
     * Information on paging
     */
    paging?: ProvisioningPagingInfo
}

export default LanguageList