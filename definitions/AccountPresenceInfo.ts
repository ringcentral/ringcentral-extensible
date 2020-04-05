import GetPresenceInfo from './GetPresenceInfo'
import PresenceNavigationInfo from './PresenceNavigationInfo'
import PresencePagingInfo from './PresencePagingInfo'

class AccountPresenceInfo
{
    /**
     * Canonical URI of account presence resource
     */
    uri: string

    /**
     * List of Prompts
     */
    records: GetPresenceInfo[]

    /**
     * Information on navigation
     */
    navigation: PresenceNavigationInfo

    /**
     * Information on paging
     */
    paging: PresencePagingInfo
}

export default AccountPresenceInfo