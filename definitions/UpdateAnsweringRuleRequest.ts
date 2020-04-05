import ForwardingInfoCreateRuleRequest from './ForwardingInfoCreateRuleRequest'
import CallersInfoRequest from './CallersInfoRequest'
import CalledNumberInfo from './CalledNumberInfo'
import ScheduleInfo from './ScheduleInfo'
import UnconditionalForwardingInfo from './UnconditionalForwardingInfo'
import QueueInfo from './QueueInfo'
import VoicemailInfo from './VoicemailInfo'
import GreetingInfo from './GreetingInfo'

class UpdateAnsweringRuleRequest
{
    /// <summary>
    /// Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
    /// </summary>
    forwarding: ForwardingInfoCreateRuleRequest

    /// <summary>
    /// Specifies if the rule is active or inactive. The default value is 'True'
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Name of an answering rule specified by user
    /// </summary>
    name: string

    /// <summary>
    /// Answering rule will be applied when calls are received from the specified caller(s)
    /// </summary>
    callers: CallersInfoRequest[]

    /// <summary>
    /// Answering rules are applied when calling to selected number(s)
    /// </summary>
    calledNumbers: CalledNumberInfo[]

    /// <summary>
    /// Schedule when an answering rule should be applied
    /// </summary>
    schedule: ScheduleInfo

    /// <summary>
    /// Specifies how incoming calls are forwarded
    /// Enum: ForwardCalls, UnconditionalForwarding, AgentQueue, TransferToExtension, TakeMessagesOnly, PlayAnnouncementOnly, SharedLines
    /// </summary>
    callHandlingAction: string

    /// <summary>
    /// Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
    /// </summary>
    unconditionalForwarding: UnconditionalForwardingInfo

    /// <summary>
    /// Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action
    /// </summary>
    queue: QueueInfo

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

    /// <summary>
    /// Indicates whether inactive numbers should be returned or not
    /// </summary>
    showInactiveNumbers: boolean
}

export default UpdateAnsweringRuleRequest