import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class DictionaryGreetingInfo
{
    /// <summary>
    /// Internal identifier of a greeting
    /// </summary>
    id: string

    /// <summary>
    /// Link to a greeting
    /// </summary>
    uri: string

    /// <summary>
    /// Name of a greeting
    /// </summary>
    name: string

    /// <summary>
    /// Usage type of a greeting, specifying if the greeting is applied for user extension or department extension.
    /// Enum: UserExtensionAnsweringRule, ExtensionAnsweringRule, DepartmentExtensionAnsweringRule, BlockedCalls, CallRecording, CompanyAnsweringRule, CompanyAfterHoursAnsweringRule, LimitedExtensionAnsweringRule, VoicemailExtensionAnsweringRule, AnnouncementExtensionAnsweringRule
    /// </summary>
    usageType: string

    /// <summary>
    /// Text of a greeting, if any
    /// </summary>
    text: string

    /// <summary>
    /// Link to a greeting content (audio file), if any
    /// </summary>
    contentUri: string

    /// <summary>
    /// Type of a greeting, specifying the case when the greeting is played.
    /// Enum: Introductory, Announcement, AutomaticRecording, BlockedCallersAll, BlockedCallersSpecific, BlockedNoCallerId, BlockedPayPhones, ConnectingMessage, ConnectingAudio, StartRecording, StopRecording, Voicemail, Unavailable, InterruptPrompt, HoldMusic, Company
    /// </summary>
    type: string

    /// <summary>
    /// Category of a greeting, specifying data form. The category value 'None' specifies that greetings of a certain type ('Introductory', 'ConnectingAudio', etc.) are switched off for an extension = ['Music', 'Message', 'RingTones', 'None']
    /// Enum: Music, Message, RingTones, None
    /// </summary>
    category: string

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default DictionaryGreetingInfo