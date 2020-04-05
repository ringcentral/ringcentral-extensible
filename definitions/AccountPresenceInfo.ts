import GetPresenceInfo from './GetPresenceInfo'
import PresenceNavigationInfo from './PresenceNavigationInfo'
import PresencePagingInfo from './PresencePagingInfo'

class AccountPresenceInfo
{
    /// <summary>
    /// Canonical URI of account presence resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of Prompts
    /// </summary>
    records: GetPresenceInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: PresenceNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: PresencePagingInfo
}

export default AccountPresenceInfo