import PresetInfo from './PresetInfo'
import CustomGreetingInfo from './CustomGreetingInfo'

class GreetingInfo
{
    /**
     * Type of a greeting, specifying the case when the greeting is played.
     * Enum: Introductory, Announcement, ConnectingMessage, ConnectingAudio, Voicemail, Unavailable, InterruptPrompt, HoldMusic, Custom, Company, BlockedCallersSpecific, BlockedCallersAll, BlockedNoCallerId, BlockedPayPhones, StartRecording, StopRecording, AutomaticRecording
     */
    type?: string

    /**
     * Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.
     * Enum: UserExtensionAnsweringRule, ExtensionAnsweringRule, DepartmentExtensionAnsweringRule, CompanyAnsweringRule, CompanyAfterHoursAnsweringRule, VoicemailExtensionAnsweringRule, AnnouncementExtensionAnsweringRule
     */
    usageType?: string

    /**
     */
    preset?: PresetInfo

    /**
     */
    custom?: CustomGreetingInfo
}

export default GreetingInfo