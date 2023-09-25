interface WcsSessionWithLocaleCodeModel {
  /**
   * Session scheduled start time.
   * Required
   * Format: date-time
   */
  scheduledStartTime?: string;

  /**
   * The duration of the Session in seconds.
   * Required
   * Maximum: 43200
   * Minimum: 30
   * Format: int32
   * Example: 1800
   */
  scheduledDuration?: number;

  /**
   * IANA-compatible time zone name (see https://www.iana.org/time-zones).
   * Required
   * Example: America/New_York
   */
  timeZone?: string;

  /**
   * The time offset (positive, in seconds) indicating how much in advance
   *  (comparing to "scheduledStartTime") panel members should join for the pre-webinar team sync
   * Format: int32
   * Example: 900
   */
  panelJoinTimeOffset?: number;

  /**
   * Session title. Can be left blank - then Webinar title should be used for presentation.
   * Example: Live Broadcasting US
   */
  title?: string;

  /**
   * User-friendly description of the Session. Can be left blank - then Webinar title should be used for presentation.
   * Example: Live session for US-based participants
   */
  description?: string;

  /**
   * Session status (for the purposes of Configuration service)
   * Example: Scheduled
   */
  status?: 'Scheduled' | 'Active' | 'Finished';

  /**
   * The URI to join the webinar as a host
   * Format: uri
   * Example: https://v.ringcentral.com/w/join/de7yd8ew7yfsdfjh899843rgj
   */
  hostJoinUri?: string;

  /**
   * Session locale code. Can't be blank or null
   * Example: en-US
   */
  localeCode?: string;
}

export default WcsSessionWithLocaleCodeModel;
