import {
  GetPresenceInfo,
  PresenceNavigationInfo,
  PresencePagingInfo,
} from './index';

class AccountPresenceInfo {
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
