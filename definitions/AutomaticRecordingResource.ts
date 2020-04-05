class AutomaticRecordingResource
{
    /// <summary>
    /// Flag for controling Automatic Call Recording settings
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Flag for controlling 'Play Call Recording Announcement for Outbound Calls' settings
    /// </summary>
    outboundCallTones: boolean

    /// <summary>
    /// Flag for controlling 'Play periodic tones for outbound calls' settings
    /// </summary>
    outboundCallAnnouncement: boolean

    /// <summary>
    /// Flag for controlling 'Allow mute in auto call recording' settings
    /// </summary>
    allowMute: boolean

    /// <summary>
    /// Total amount of extension that are used in call recordings
    /// </summary>
    extensionCount: number
}

export default AutomaticRecordingResource