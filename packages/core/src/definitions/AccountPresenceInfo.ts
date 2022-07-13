import GetPresenceInfo from './GetPresenceInfo';
import PresenceNavigationInfo from './PresenceNavigationInfo';
import PresencePagingInfo from './PresencePagingInfo';

interface AccountPresenceInfo {
  /**
   * Canonical URI of account presence resource
   */
  uri?: string;

  /**
   * List of Prompts
   */
  records?: GetPresenceInfo[];

  /**
   */
  navigation?: PresenceNavigationInfo;

  /**
   */
  paging?: PresencePagingInfo;
}

export default AccountPresenceInfo;
