import MeetingLinks from "./MeetingLinks.js";
import MeetingScheduleResource from "./MeetingScheduleResource.js";
import HostInfoRequest from "./HostInfoRequest.js";
import RecurrenceInfo from "./RecurrenceInfo.js";
import MeetingOccurrenceInfo from "./MeetingOccurrenceInfo.js";

interface MeetingResponseResource {
  /**
   * Link to a meeting resource
   * Format: uri
   */
  uri?: string;

  /**
   * Universally unique identifier of a meeting"
   */
  uuid?: string;

  /**
   * Internal identifier of a meeting
   */
  id?: string;

  /**
   * Custom topic of a meeting
   */
  topic?: string;

  /** */
  meetingType?: "Instant" | "Scheduled" | "ScheduledRecurring" | "Recurring";

  /**
   * Meeting password
   */
  password?: string;

  /** */
  h323Password?: string;

  /**
   * Status of a meeting
   */
  status?: string;

  /** */
  links?: MeetingLinks;

  /** */
  schedule?: MeetingScheduleResource;

  /** */
  host?: HostInfoRequest;

  /**
   * If true, then participants can join the meeting before host arrives
   */
  allowJoinBeforeHost?: boolean;

  /**
   * Starting meetings with host video on/off (true/false)
   */
  startHostVideo?: boolean;

  /**
   * Starting meetings with participant video on/off (true/false)
   */
  startParticipantsVideo?: boolean;

  /** */
  audioOptions?: ("Phone" | "ComputerAudio")[];

  /** */
  recurrence?: RecurrenceInfo;

  /**
   * Automatic record type
   * Default: none
   */
  autoRecordType?: "local" | "cloud" | "none";

  /**
   * If true, then only signed-in users can join this meeting
   */
  enforceLogin?: boolean;

  /**
   * If true, then participants are muted on entry
   */
  muteParticipantsOnEntry?: boolean;

  /** */
  occurrences?: MeetingOccurrenceInfo[];

  /**
   * If true, then the waiting room for participants is enabled
   */
  enableWaitingRoom?: boolean;

  /**
   * List of global dial-in countries (eg. US, UK, AU, etc.)
   */
  globalDialInCountries?: string[];

  /** */
  alternativeHosts?: string;
}

export default MeetingResponseResource;
