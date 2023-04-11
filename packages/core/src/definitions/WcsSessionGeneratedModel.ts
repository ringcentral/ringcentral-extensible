interface WcsSessionGeneratedModel {
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

export default WcsSessionGeneratedModel;
