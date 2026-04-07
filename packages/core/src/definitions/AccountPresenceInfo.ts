import type PresenceInfoResponse from "./PresenceInfoResponse.js";
import type PresenceNavigationInfo from "./PresenceNavigationInfo.js";
import type PresencePagingInfo from "./PresencePagingInfo.js";

interface AccountPresenceInfo {
  /**
   * Canonical URI of account presence resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of Prompts
   */
  records?: PresenceInfoResponse[];

  /**
   */
  navigation?: PresenceNavigationInfo;

  /**
   */
  paging?: PresencePagingInfo;
}

export default AccountPresenceInfo;
