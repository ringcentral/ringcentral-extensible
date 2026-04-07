import type Host from "./Host.js";
import type MeetingNotes from "./MeetingNotes.js";
import type Participant from "./Participant.js";
import type Recording from "./Recording.js";
import type Transcriptions from "./Transcriptions.js";

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
   * A list of transcriptions references
   */
  transcriptions?: Transcriptions[];

  /**
   * A list of meeting notes documents references
   */
  notes?: MeetingNotes[];

  /**
   * Meeting summary generated from transcriptions if AI processing was enabled for the meeting
   */
  summary?: string;

  /**
   * Chat location
   */
  chatUrl?: string;
}

export default Meeting;
