import {
  ScheduleInfo,
  CalledNumberInfo,
  CallersInfo,
  ForwardingInfo,
  UnconditionalForwardingInfo,
  QueueInfo,
  TransferredExtensionInfo,
  VoicemailInfo,
  GreetingInfo,
  SharedLinesInfo,
} from '.';

class AnsweringRuleInfo {
  /**
   * Canonical URI to an answering rule resource
   */
  uri?: string;

  /**
   * Internal identifier of an answering rule
   */
  id?: string;

  /**
   * Type of an answering rule
   */
  type?: 'BusinessHours' | 'AfterHours' | 'Custom';

  /**
   * Name of an answering rule specified by user
   */
  name?: string;

  /**
   * Specifies if an answering rule is active or inactive
   */
  enabled?: boolean;

  /**
   * Schedule when an answering rule should be applied
   */
  schedule?: ScheduleInfo;

  /**
   * Answering rules are applied when calling to selected number(s)
   */
  calledNumbers?: CalledNumberInfo[];

  /**
   * Answering rules are applied when calls are received from specified caller(s)
   */
  callers?: CallersInfo[];

  /**
   * Specifies how incoming calls are forwarded
   */
  callHandlingAction?:
    | 'ForwardCalls'
    | 'UnconditionalForwarding'
    | 'AgentQueue'
    | 'TransferToExtension'
    | 'TakeMessagesOnly'
    | 'PlayAnnouncementOnly'
    | 'SharedLines';

  /**
   * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
   */
  forwarding?: ForwardingInfo;

  /**
   * Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
   */
  unconditionalForwarding?: UnconditionalForwardingInfo;

  /**
   * Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action
   */
  queue?: QueueInfo;

  /**
   * Transfer settings applied for department (call queue) extension type, with 'TransferToExtension' call handling action
   */
  transfer?: TransferredExtensionInfo;

  /**
   * Specifies whether to take a voicemail and who should do it
   */
  voicemail?: VoicemailInfo;

  /**
   * Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List
   */
  greetings?: GreetingInfo[];

  /**
   * Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller ID is missing, then callers are asked to say their name before connecting; 'UnknownCallerId' - if caller ID is not in contact list, then callers are asked to say their name before connecting; 'Always' - the callers are always asked to say their name before connecting. The default value is 'Off'
   */
  screening?: 'Off' | 'NoCallerId' | 'UnknownCallerId' | 'Always';

  /**
   * SharedLines call handling action settings
   */
  sharedLines?: SharedLinesInfo;
}

export default AnsweringRuleInfo;
