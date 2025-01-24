import type GetPresenceInfo from "./GetPresenceInfo";
import type PresenceNavigationInfo from "./PresenceNavigationInfo";
import type PresencePagingInfo from "./PresencePagingInfo";

interface AccountPresenceInfo {
  /**
   * Canonical URI of account presence resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of Prompts
   */
  records?: GetPresenceInfo[];

  /** */
  navigation?: PresenceNavigationInfo;

  /** */
  paging?: PresencePagingInfo;
}

export default AccountPresenceInfo;
