import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class DictionaryGreetingInfo
{
    /**
     * Internal identifier of a greeting
     */
    id?: string

    /**
     * Link to a greeting
     */
    uri?: string

    /**
     * Name of a greeting
     */
    name?: string

    /**
     * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension.
     * Enum: UserExtensionAnsweringRule, ExtensionAnsweringRule, DepartmentExtensionAnsweringRule, BlockedCalls, CallRecording, CompanyAnsweringRule, CompanyAfterHoursAnsweringRule, LimitedExtensionAnsweringRule, VoicemailExtensionAnsweringRule, AnnouncementExtensionAnsweringRule
     */
    usageType?: string

    /**
     * Text of a greeting, if any
     */
    text?: string

    /**
     * Link to a greeting content (audio file), if any
     */
    contentUri?: string

    /**
     * Type of a greeting, specifying the case when the greeting is played.
     * Enum: Introductory, Announcement, AutomaticRecording, BlockedCallersAll, BlockedCallersSpecific, BlockedNoCallerId, BlockedPayPhones, ConnectingMessage, ConnectingAudio, StartRecording, StopRecording, Voicemail, Unavailable, InterruptPrompt, HoldMusic, Company
     */
    type?: string

    /**
     * Category of a greeting, specifying data form. The category value 'None' specifies that greetings of a certain type ('Introductory', 'ConnectingAudio', etc.) are switched off for an extension = ['Music', 'Message', 'RingTones', 'None']
     * Enum: Music, Message, RingTones, None
     */
    category?: string

    /**
     * Information on navigation
     */
    navigation?: CallHandlingNavigationInfo

    /**
     * Information on paging
     */
    paging?: CallHandlingPagingInfo
}

export default DictionaryGreetingInfo