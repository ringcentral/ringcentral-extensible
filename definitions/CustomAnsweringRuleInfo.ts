import ScheduleInfo from './ScheduleInfo'
import CalledNumberInfo from './CalledNumberInfo'
import CallersInfo from './CallersInfo'
import ForwardingInfo from './ForwardingInfo'
import UnconditionalForwardingInfo from './UnconditionalForwardingInfo'
import QueueInfo from './QueueInfo'
import TransferredExtensionInfo from './TransferredExtensionInfo'
import VoicemailInfo from './VoicemailInfo'
import GreetingInfo from './GreetingInfo'

class CustomAnsweringRuleInfo
{
    /// <summary>
    /// Canonical URI to an answering rule resource
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of an answering rule
    /// </summary>
    id: string

    /// <summary>
    /// Type of an answering rule
    /// Enum: BusinessHours, AfterHours, Custom
    /// </summary>
    type: string

    /// <summary>
    /// Name of an answering rule specified by user
    /// </summary>
    name: string

    /// <summary>
    /// Specifies if an answering rule is active or inactive
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Schedule when an answering rule should be applied
    /// </summary>
    schedule: ScheduleInfo

    /// <summary>
    /// Answering rules are applied when calling to selected number(s)
    /// </summary>
    calledNumbers: CalledNumberInfo[]

    /// <summary>
    /// Answering rules are applied when calls are received from specified caller(s)
    /// </summary>
    callers: CallersInfo[]

    /// <summary>
    /// Specifies how incoming calls are forwarded
    /// Enum: ForwardCalls, UnconditionalForwarding, AgentQueue, TransferToExtension, TakeMessagesOnly, PlayAnnouncementOnly
    /// </summary>
    callHandlingAction: string

    /// <summary>
    /// Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
    /// </summary>
    forwarding: ForwardingInfo

    /// <summary>
    /// Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
    /// </summary>
    unconditionalForwarding: UnconditionalForwardingInfo

    /// <summary>
    /// Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action
    /// </summary>
    queue: QueueInfo

    /// <summary>
    /// Transfer settings applied for department (call queue) extension type, with 'TransferToExtension' call handling action
    /// </summary>
    transfer: TransferredExtensionInfo

    /// <summary>
    /// Specifies whether to take a voicemail and who should do it
    /// </summary>
    voicemail: VoicemailInfo

    /// <summary>
    /// Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List
    /// </summary>
    greetings: GreetingInfo[]

    /// <summary>
    /// Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller ID is missing, then callers are asked to say their name before connecting; 'UnknownCallerId' - if caller ID is not in contact list, then callers are asked to say their name before connecting; 'Always' - the callers are always asked to say their name before connecting. The default value is 'Off'
    /// Enum: Off, NoCallerId, UnknownCallerId, Always
    /// </summary>
    screening: string
}

export default CustomAnsweringRuleInfo