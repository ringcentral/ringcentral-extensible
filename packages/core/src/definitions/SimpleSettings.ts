interface SimpleSettings {
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
}

export default SimpleSettings;
