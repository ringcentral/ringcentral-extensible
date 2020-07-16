class AccountLimits {
  /**
   * Max number of free softphone phone lines per user extension
   */
  freeSoftPhoneLinesPerExtension?: number;

  /**
   * Max number of participants in RingCentral meeting hosted by this account's user
   */
  meetingSize?: number;

  /**
   * Meetings recording cloud storage limitaion in Gb
   */
  cloudRecordingStorage?: number;

  /**
   * Max number of extensions which can be included in the list of users monitored for Presence
   */
  maxMonitoredExtensionsPerUser?: number;

  /**
   * Max length of extension numbers of an account; the supported value is up to 8 symbols, depends on account type
   * Default: 5
   */
  maxExtensionNumberLength?: number;

  /**
   * Length of a site code
   */
  siteCodeLength?: number;

  /**
   * Length of a short extension number
   */
  shortExtensionNumberLength?: number;
}

export default AccountLimits;
