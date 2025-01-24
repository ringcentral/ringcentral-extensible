import type Host from "./Host";
import type Participant from "./Participant";
import type Recording from "./Recording";

/**
 * Meeting information
 */
interface Meeting {
  /**
   * Call id
   * Required
   */
  id?: string;

  /**
   * Bridge id
   * Required
   */
  bridgeId?: string;

  /**
   * Short bridge id
   * Required
   */
  shortId?: string;

  /**
   * Start time ISO 8601
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * Duration second
   * Format: int32
   * Example: 36
   */
  duration?: number;

  /**
   * Meetings name
   * Required
   */
  displayName?: string;

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
   * Required
   */
  hostInfo?: Host;

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
