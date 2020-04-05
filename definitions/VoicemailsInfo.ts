class VoicemailsInfo
{
    /// <summary>
    /// Email notification flag
    /// </summary>
    notifyByEmail: boolean

    /// <summary>
    /// SMS notification flag
    /// </summary>
    notifyBySms: boolean

    /// <summary>
    /// List of recipient email addresses for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedEmailAddresses: string[]

    /// <summary>
    /// List of recipient phone numbers for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedSmsEmailAddresses: string[]

    /// <summary>
    /// Indicates whether voicemail should be attached to email
    /// </summary>
    includeAttachment: boolean

    /// <summary>
    /// Specifies whether to add voicemail transcription or not
    /// </summary>
    includeTranscription: boolean

    /// <summary>
    /// Indicates whether a voicemail should be automatically marked as read
    /// </summary>
    markAsRead: boolean
}

export default VoicemailsInfo