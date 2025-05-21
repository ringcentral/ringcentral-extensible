import ForwardingInfoCreateRuleRequest from "./ForwardingInfoCreateRuleRequest.js";
import CallersInfoRequest from "./CallersInfoRequest.js";
import CalledNumberInfo from "./CalledNumberInfo.js";
import ScheduleInfo from "./ScheduleInfo.js";
import UnconditionalForwardingInfo from "./UnconditionalForwardingInfo.js";
import QueueInfo from "./QueueInfo.js";
import VoicemailInfo from "./VoicemailInfo.js";
import MissedCallInfo from "./MissedCallInfo.js";
import GreetingInfo from "./GreetingInfo.js";
import TransferredExtensionInfo from "./TransferredExtensionInfo.js";

interface UpdateAnsweringRuleRequest {
  /**
   * Identifier of an answering rule
   */
  id?: string;

  /** */
  forwarding?: ForwardingInfoCreateRuleRequest;

  /**
   * Specifies if the rule is active or inactive. The default value is `true`
   */
  enabled?: boolean;

  /**
   * Name of an answering rule specified by user
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

  /** */
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
   * Type of an answering rule
   * Default: Custom
   */
  type?: "BusinessHours" | "AfterHours" | "Custom";

  /** */
  unconditionalForwarding?: UnconditionalForwardingInfo;

  /** */
  queue?: QueueInfo;

  /** */
  voicemail?: VoicemailInfo;

  /** */
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

  /**
   * Indicates whether inactive numbers should be returned or not
   */
  showInactiveNumbers?: boolean;

  /** */
  transfer?: TransferredExtensionInfo;
}

export default UpdateAnsweringRuleRequest;
