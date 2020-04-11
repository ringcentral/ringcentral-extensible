import RuleInfoCreateRuleRequest from './RuleInfoCreateRuleRequest'

class ForwardingInfoCreateRuleRequest
{
  /**
   * Specifies if the first ring on desktop/mobile apps is enabled. The default value is 'True'
   */
  notifyMySoftPhones?: boolean

  /**
   * Specifies if the administrator's softphone (desktop application) is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'True'
   */
  notifyAdminSoftPhones?: boolean

  /**
   * Specifies delay between ring on apps and starting of a call forwarding
   * Default: 1
   */
  softPhonesRingCount?: number

  /**
   * Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ringing all at the same time. The default value is 'Sequentially'
   */
  ringingMode?: ('Sequentially' | 'Simultaneously')

  /**
   * Information on a call forwarding rule
   */
  rules?: RuleInfoCreateRuleRequest[]

  /**
   * Specifies if mobile timeout is activated for the rule
   */
  mobileTimeout?: boolean
}

export default ForwardingInfoCreateRuleRequest
