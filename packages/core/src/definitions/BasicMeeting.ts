import Host from "./Host.js";

/**
 * Meeting information
 */
interface BasicMeeting {
  /**
   * Meeting id
   * Required
   */
  id?: string;

  /**
   * Short bridge id
   * Required
   */
  shortId?: string;

  /**
   * Bridge id
   */
  bridgeId?: string;

  /**
   * Start time ISO 8601
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * Meeting name
   * Required
   */
  displayName?: string;

  /**
   * Required
   */
  hostInfo?: Host;
}

export default BasicMeeting;
