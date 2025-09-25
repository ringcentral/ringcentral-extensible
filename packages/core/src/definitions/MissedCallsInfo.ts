interface MissedCallsInfo {
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
   * List of recipient email addresses for missed call notifications.
   *  Returned if specified, in both modes (advanced/basic). Applied in advanced
   *  mode only
   */
  advancedEmailAddresses?: string[];

  /**
   * List of recipient phone numbers for missed call notifications.
   *  Returned if specified, in both modes (advanced/basic). Applied in advanced
   *  mode only
   */
  advancedSmsEmailAddresses?: string[];
}

export default MissedCallsInfo;
