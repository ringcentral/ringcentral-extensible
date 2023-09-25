interface MessageStoreConfiguration {
  /**
   * Retention policy setting, specifying how long to keep messages;
   *  the supported value range is 7-90 days. Currently the retention period is supported for Fax and Voicemail messages only.
   *  SMS messages are stored with no time limits
   * Maximum: 90
   * Minimum: 7
   * Format: int32
   */
  retentionPeriod?: number;
}

export default MessageStoreConfiguration;
