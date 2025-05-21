import Host from "./Host.js";
import Participant from "./Participant.js";
import Recording from "./Recording.js";

/**
 * Meeting information
 */
interface Meeting {
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
   * Format: int32
   * Example: 36
   */
  duration?: number;

  /**
   * Meeting type
   * Required
   */
  type?: "Meeting" | "Call";

  /**
   * Meeting status
   * Required
   */
  status?: "InProgress" | "Done";

  /**
   * Describe access rights which has participants to meeting
   * Required
   */
  rights?: ("delete" | "download" | "share")[];

  /**
   * During meeting AI team analyze code and after meeting finished generates text summary about this meeting
   */
  longSummary?: string;

  /**
   * During meeting AI team analyze code and after meeting finished generates text summary about this meeting
   */
  shortSummary?: string;

  /**
   * During meeting AI team analyze code and after meeting finished generates key words used in meeting
   */
  keywords?: string[];

  /**
   * List of the participants in the meeting
   * Required
   */
  participants?: Participant[];

  /**
   * Recording information
   * Required
   */
  recordings?: Recording[];

  /**
   * Chat location
   */
  chatUrl?: string;
}

export default Meeting;
