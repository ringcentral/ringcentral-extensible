interface AutomaticRecordingResource {
  /**
   * Flag for controlling Automatic Call Recording settings
   */
  enabled?: boolean;

  /**
   * Flag for controlling 'Play Call Recording Announcement for Outbound Calls' settings
   */
  outboundCallTones?: boolean;

  /**
   * Flag for controlling 'Play periodic tones for outbound calls' settings
   */
  outboundCallAnnouncement?: boolean;

  /**
   * Flag for controlling 'Allow mute in auto call recording' settings
   */
  allowMute?: boolean;

  /**
   * Total amount of extension that are used in call recordings
   * Format: int32
   */
  extensionCount?: number;

  /**
   * Retention period of a call recording, the default value is 90 days
   * Format: int32
   */
  retentionPeriod?: number;

  /**
   * Maximum number of automatic call recordings per account, the default value is 100 000
   * Format: int32
   */
  maxNumberLimit?: number;
}

export default AutomaticRecordingResource;
