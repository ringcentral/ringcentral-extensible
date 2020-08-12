import {
  CallersInfoRequest,
  CalledNumberInfo,
  ScheduleInfo,
  ForwardingInfo,
  UnconditionalForwardingInfo,
  QueueInfo,
  TransferredExtensionInfo,
  VoicemailInfo,
  GreetingInfo,
} from './index';

class CreateAnsweringRuleRequest {
  /**
   * Specifies if the rule is active or inactive. The default value is 'True'
   */
  enabled?: boolean;

  /**
   * Type of an answering rule. The 'Custom' value should be specified
   */
  type?: string;

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

  /**
   * Schedule when an answering rule should be applied
   */
  schedule?: ScheduleInfo;

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
}

export default CreateAnsweringRuleRequest;
