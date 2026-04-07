interface VoicemailsInfo {
  /**
   * Email notification flag
   */
  notifyByEmail?: boolean;

  /**
   * SMS notification flag
   */
  notifyBySms?: boolean;

  /**
   * The parameter contains the list of phone Numbers which should be used for SMS notifications sending (if advanced mode enabled)
   */
  advancedSmsPhoneNumbers?: string[];

  /**
   * List of recipient email addresses for voicemail notifications.
   *  Returned if specified, in both modes (advanced/basic). Applied in advanced
   *  mode only
   */
  advancedEmailAddresses?: string[];

  /**
   * List of recipient phone numbers for voicemail notifications.
   *  Returned if specified, in both modes (advanced/basic). Applied in advanced
   *  mode only
   */
  advancedSmsEmailAddresses?: string[];

  /**
   * Indicates whether voicemail should be attached to email
   */
  includeAttachment?: boolean;

  /**
   * Specifies whether to add voicemail transcription or not
   */
  includeTranscription?: boolean;

  /**
   * Indicates whether a voicemail should be automatically marked
   *  as read
   */
  markAsRead?: boolean;
}

export default VoicemailsInfo;
