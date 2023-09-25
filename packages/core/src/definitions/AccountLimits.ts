/**
 * Limits which are effective for the account
 */
interface AccountLimits {
  /**
   * Max number of free softphone phone lines per user extension
   * Format: int32
   */
  freeSoftPhoneLinesPerExtension?: number;

  /**
   * Max number of participants in RingCentral meeting hosted by
   *  this account's user
   * Format: int32
   */
  meetingSize?: number;

  /**
   * Meetings recording cloud storage limitation in Gb
   * Format: int32
   */
  cloudRecordingStorage?: number;

  /**
   * Max number of extensions which can be included in the list
   *  of users monitored for Presence
   * Format: int32
   */
  maxMonitoredExtensionsPerUser?: number;

  /**
   * Max length of extension numbers of an account; the supported
   *  value is up to 8 symbols, depends on account type
   * Format: int32
   */
  maxExtensionNumberLength?: number;

  /**
   * Length of a site code
   * Format: int32
   */
  siteCodeLength?: number;

  /**
   * Length of a short extension number
   * Format: int32
   */
  shortExtensionNumberLength?: number;
}

export default AccountLimits;
