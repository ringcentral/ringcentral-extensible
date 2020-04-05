import Attachment from './Attachment'
import CustomGreetingAnsweringRuleInfoRequest from './CustomGreetingAnsweringRuleInfoRequest'

class CreateCustomUserGreetingRequest
{
    /// <summary>
    /// Type of a greeting, specifying the case when the greeting is played.
    /// Enum: Introductory, Announcement, ConnectingMessage, ConnectingAudio, Voicemail, Unavailable, HoldMusic
    /// </summary>
    type: string

    /// <summary>
    /// Meida file to upload
    /// </summary>
    binary: Attachment

    /// <summary>
    /// </summary>
    answeringRule: CustomGreetingAnsweringRuleInfoRequest
}

export default CreateCustomUserGreetingRequest