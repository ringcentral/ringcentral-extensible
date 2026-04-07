import type CalledNumberInfo from "./CalledNumberInfo.js";
import type CallersInfoRequest from "./CallersInfoRequest.js";
import type ForwardingInfo from "./ForwardingInfo.js";
import type GreetingInfo from "./GreetingInfo.js";
import type MissedCallInfo from "./MissedCallInfo.js";
import type QueueInfo from "./QueueInfo.js";
import type ScheduleInfo from "./ScheduleInfo.js";
import type TransferredExtensionInfo from "./TransferredExtensionInfo.js";
import type UnconditionalForwardingInfo from "./UnconditionalForwardingInfo.js";
import type VoicemailInfo from "./VoicemailInfo.js";

interface CreateAnsweringRuleRequest {
  /**
   * Specifies if the rule is active or inactive. The default value
   *  is `true`
   */
  enabled?: boolean;

  /**
   * Type of an answering rule. The 'Custom' value should be specified
   * Required
   */
  type?: string;

  /**
   * Name of an answering rule specified by user
   * Required
   */
  name?: string;

  /**
   * Answering rule will be applied when calls are received from the specified caller(s)
   */
  callers?: CallersInfoRequest[];

  /**
   * Answering rules are applied when calling to selected number(s)
   */
  calledNumbers?: CalledNumberInfo[];

  /**
   */
  schedule?: ScheduleInfo;

  /**
   * Specifies how incoming calls are forwarded
   */
  callHandlingAction?:
    | "ForwardCalls"
    | "UnconditionalForwarding"
    | "AgentQueue"
    | "TransferToExtension"
    | "TakeMessagesOnly"
    | "PlayAnnouncementOnly"
    | "SharedLines";

  /**
   */
  forwarding?: ForwardingInfo;

  /**
   */
  unconditionalForwarding?: UnconditionalForwardingInfo;

  /**
   */
  queue?: QueueInfo;

  /**
   */
  transfer?: TransferredExtensionInfo;

  /**
   */
  voicemail?: VoicemailInfo;

  /**
   */
  missedCall?: MissedCallInfo;

  /**
   * Greetings applied for an answering rule; only predefined greetings
   *  can be applied, see Dictionary Greeting List
   */
  greetings?: GreetingInfo[];

  /**
   * Call screening status. 'Off' - no call screening; 'NoCallerId'
   *  - if caller ID is missing, then callers are asked to say their name before
   *  connecting; 'UnknownCallerId' - if caller ID is not in contact list, then
   *  callers are asked to say their name before connecting; 'Always' - the
   *  callers are always asked to say their name before connecting. The default
   *  value is 'Off'
   * Default: Off
   */
  screening?: "Off" | "NoCallerId" | "UnknownCallerId" | "Always";
}

export default CreateAnsweringRuleRequest;
