interface RegSessionModelSettings {
  /**
   * The maximum number of registrants which forces closing the registration (0 means "off").
   * Format: int32
   */
  autoCloseLimit?: number;

  /**
   * Indicates that emails to registrants should be suppressed (should be supported by external party)
   */
  suppressEmails?: boolean;

  /**
   * Indicates that registration digest should be sent to host.
   * Default: true
   */
  registrationDigestEnabled?: boolean;

  /**
   * Indicates that registrants are allowed to join from multiple devices.
   */
  preventMultipleDeviceJoins?: boolean;

  /**
   * Indicates that work email address is required for registration.
   */
  workEmailRequired?: boolean;

  /**
   * Indicates that recording will be shown after the webinar and in emails.
   */
  viewRecording?: boolean;

  /**
   * Duration of on-demand webinar. The default value can only be used if the session is on demand.
   * Default: SixMonths
   */
  onDemandDuration?: 'OneMonth' | 'TwoMonths' | 'ThreeMonths' | 'SixMonths' | 'OneYear';

  /**
   * Indicates that recording exists for the session.
   */
  recordingExist?: boolean;
}

export default RegSessionModelSettings;
