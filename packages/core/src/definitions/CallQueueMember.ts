import SiteBasicInfo from "./SiteBasicInfo.js";

/**
 * Call queue member information
 */
interface CallQueueMember {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Extension full name
   */
  name?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;

  /** */
  site?: SiteBasicInfo;
}

export default CallQueueMember;
