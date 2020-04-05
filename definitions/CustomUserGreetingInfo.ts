import CustomGreetingAnsweringRuleInfo from './CustomGreetingAnsweringRuleInfo'

class CustomUserGreetingInfo
{
    /// <summary>
    /// Link to a custom user greeting
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a custom user greeting
    /// </summary>
    id: string

    /// <summary>
    /// Type of a custom user greeting
    /// Enum: Introductory, Announcement, InterruptPrompt, ConnectingAudio, ConnectingMessage, Voicemail, Unavailable, HoldMusic, PronouncedName
    /// </summary>
    type: string

    /// <summary>
    /// Content media type
    /// Enum: audio/mpeg, audio/wav
    /// </summary>
    contentType: string

    /// <summary>
    /// Link to a greeting content (audio file)
    /// </summary>
    contentUri: string

    /// <summary>
    /// Information on an answering rule that the greeting is applied to
    /// </summary>
    answeringRule: CustomGreetingAnsweringRuleInfo
}

export default CustomUserGreetingInfo