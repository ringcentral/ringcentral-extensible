interface SessionBaseModel {
  /**
   * Session start time. If a session hasn't been started this fields should be set to "scheduledStartTime"
   * Format: date-time
   */
  startTime?: string;

  /**
   * Session end time. If a session hasn't been finished this fields should be set to ("startTime"+"scheduledDuration")
   * Format: date-time
   */
  endTime?: string;

  /**
   * Session duration in seconds rounded up (returned if 'startTime' and 'endTime' are not empty)
   * Format: int32
   * Example: 3600
   */
  duration?: number;

  /**
   * Session title. If blank - derived from webinar title.
   * Example: Live Broadcasting US
   */
  title?: string;

  /**
   * User-friendly description of the Session. If blank - derived from webinar title.
   * Example: Live session for US-based participants
   */
  description?: string;

  /**
   * Session scheduled start time.
   * Format: date-time
   */
  scheduledStartTime?: string;

  /**
   * The scheduled duration of the Session in seconds.
   * Format: int32
   * Example: 1800
   */
  scheduledDuration?: number;

  /**
   * IANA-compatible time zone name (see https://www.iana.org/time-zones).
   * Example: America/New_York
   */
  timeZone?: string;

  /**
   * Session locale code. Can't be blank or null.
   * Example: en-US
   * Default: en-US
   */
  localeCode?: string;

  /**
   * The time offset (positive, in seconds) indicating how much in advance
 *  (comparing to "scheduledStartTime") panel members should join for the pre-webinar team sync
   * Format: int32
   * Example: 900
   */
  panelJoinTimeOffset?: number;

  /**
   * The time when broadcasting started.
   * Format: date-time
   */
  broadcastingStartTime?: string;

  /**
   * The time when broadcasting ended.
   * Format: date-time
   */
  broadcastingEndTime?: string;

  /**
   * Webinar session status
   * Example: Finished
   */
  status?: ('Scheduled' | 'Active' | 'Finished');

  /**
   * Session runtime status (for 'Active' Sessions only).
 *  It is omitted (or null) if the status is not Active
   */
  runtimeStatus?: ('Idle' | 'Practice' | 'GoingLive' | 'Live' | 'Break' | 'Debrief');

  /**
   * The number of participants (of all roles) who joined the webinar
   * Format: int32
   * Example: 150
   */
  participantCount?: number;

  /**
   * The number of attendees who joined the webinar
   * Format: int32
   * Example: 145
   */
  attendeeCount?: number;

  /**
   * Unique number of participants (of all roles) who joined the webinar
   * Format: int32
   * Example: 140
   */
  uniqueParticipantCount?: number;

  /**
   * Unique number of attendees who joined the webinar
   * Format: int32
   * Example: 135
   */
  uniqueAttendeeCount?: number;
}

export default SessionBaseModel;
