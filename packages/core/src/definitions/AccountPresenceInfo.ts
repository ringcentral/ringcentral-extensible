import GetPresenceInfo from "./GetPresenceInfo.js";
import PresenceNavigationInfo from "./PresenceNavigationInfo.js";
import PresencePagingInfo from "./PresencePagingInfo.js";

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
