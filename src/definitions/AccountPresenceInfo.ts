import { GetPresenceInfo, PresenceNavigationInfo, PresencePagingInfo } from '.'

class AccountPresenceInfo
{
  /**
   * Canonical URI of account presence resource
   */
  uri?: string

  /**
   * List of Prompts
   */
  records?: GetPresenceInfo[]

  /**
   * Information on navigation
   */
  navigation?: PresenceNavigationInfo

  /**
   * Information on paging
   */
  paging?: PresencePagingInfo
}

export default AccountPresenceInfo
