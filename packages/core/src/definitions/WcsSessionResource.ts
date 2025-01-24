interface WcsSessionResource {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * Object creation time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Object last modification time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

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
   * Localized time zone description.
   * Example: Eastern Time (America/New_York)
   */
  localizedTimeZoneDescription?: string;

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
  status?: "Scheduled" | "Active" | "Finished";

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

  /**
   * The RCV bridge id
   * Example: 839874770
   */
  videoBridgeId?: string;

  /**
   * The RCV bridge password. Returned only if requested by Host/Co-host/Panelist and a password for the bridge is set.
   * Format: password
   * Example: abc123
   */
  videoBridgePassword?: string;

  /**
   * The RCV bridge PSTN password. Returned only if requested by Host/Co-host/Panelist and a PSTN password for the bridge is set.
   * Format: password
   * Example: abc123
   */
  videoBridgePstnPassword?: string;

  /**
   * The URI for attendees to join the Webinar (if it is a public webinar)
   * Format: uri
   * Example: https://v.ringcentral.com/w/a/join/iuyef77fsj473wn10ashjfk34
   */
  attendeeJoinUri?: string;

  /**
   * Calculated attribute indicating if there are any unsent/deferred invites to session participants
   */
  hasUnsentInvites?: boolean;
}

export default WcsSessionResource;
