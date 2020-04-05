class AutomaticRecordingResource
{
  /**
   * Flag for controling Automatic Call Recording settings
   */
  enabled?: boolean

  /**
   * Flag for controlling 'Play Call Recording Announcement for Outbound Calls' settings
   */
  outboundCallTones?: boolean

  /**
   * Flag for controlling 'Play periodic tones for outbound calls' settings
   */
  outboundCallAnnouncement?: boolean

  /**
   * Flag for controlling 'Allow mute in auto call recording' settings
   */
  allowMute?: boolean

  /**
   * Total amount of extension that are used in call recordings
   */
  extensionCount?: number
}

export default AutomaticRecordingResource
