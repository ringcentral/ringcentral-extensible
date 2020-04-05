import VoicemailsInfo from './VoicemailsInfo'
import InboundFaxesInfo from './InboundFaxesInfo'
import OutboundFaxesInfo from './OutboundFaxesInfo'
import InboundTextsInfo from './InboundTextsInfo'
import MissedCallsInfo from './MissedCallsInfo'

class NotificationSettingsUpdateRequest
{
    /// <summary>
    /// List of notification recipient email addresses
    /// </summary>
    emailAddresses: string[]

    /// <summary>
    /// List of notification recipient email addresses
    /// </summary>
    smsEmailAddresses: string[]

    /// <summary>
    /// Specifies notifications settings mode. If 'True' then advanced mode is on, it allows using different emails and/or phone numbers for each notification type. If 'False' then basic mode is on. Advanced mode settings are returned in both modes, if specified once, but if basic mode is switched on, they are not applied
    /// </summary>
    advancedMode: boolean

    /// <summary>
    /// </summary>
    voicemails: VoicemailsInfo

    /// <summary>
    /// </summary>
    inboundFaxes: InboundFaxesInfo

    /// <summary>
    /// </summary>
    outboundFaxes: OutboundFaxesInfo

    /// <summary>
    /// </summary>
    inboundTexts: InboundTextsInfo

    /// <summary>
    /// </summary>
    missedCalls: MissedCallsInfo
}

export default NotificationSettingsUpdateRequest