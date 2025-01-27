import WebinarRefModel from "./WebinarRefModel.js";

interface SessionRefAdminModel {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

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

  /** */
  webinar?: WebinarRefModel;
}

export default SessionRefAdminModel;
