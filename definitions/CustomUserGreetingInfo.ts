import CustomGreetingAnsweringRuleInfo from './CustomGreetingAnsweringRuleInfo'

class CustomUserGreetingInfo
{
    /**
     * Link to a custom user greeting
     */
    uri?: string

    /**
     * Internal identifier of a custom user greeting
     */
    id?: string

    /**
     * Type of a custom user greeting
     * Enum: Introductory, Announcement, InterruptPrompt, ConnectingAudio, ConnectingMessage, Voicemail, Unavailable, HoldMusic, PronouncedName
     */
    type?: string

    /**
     * Content media type
     * Enum: audio/mpeg, audio/wav
     */
    contentType?: string

    /**
     * Link to a greeting content (audio file)
     */
    contentUri?: string

    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingAnsweringRuleInfo
}

export default CustomUserGreetingInfo