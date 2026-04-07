import Host from "./Host.js";
import BasicParticipant from "./BasicParticipant.js";

/**
 * Meeting information
 */
interface AdminAccessMeeting {
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
   * Required
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

  /**
   * Meeting duration in seconds
   * Required
   * Format: int32
   * Example: 36
   */
  duration?: number;

  /**
   * List of the participants in the meeting
   * Required
   */
  participants?: BasicParticipant[];

  /**
   * Public chat txt file for the meeting
   */
  chatContentUri?: string;
}

export default AdminAccessMeeting;
