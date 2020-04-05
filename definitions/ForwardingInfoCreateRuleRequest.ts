import RuleInfoCreateRuleRequest from './RuleInfoCreateRuleRequest'

class ForwardingInfoCreateRuleRequest
{
    /// <summary>
    /// Specifies if the first ring on desktop/mobile apps is enabled. The default value is 'True'
    /// </summary>
    notifyMySoftPhones: boolean

    /// <summary>
    /// Specifies if the administrator's softphone (desktop application) is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'True'
    /// </summary>
    notifyAdminSoftPhones: boolean

    /// <summary>
    /// Specifies delay between ring on apps and starting of a call forwarding
    /// Default: 1
    /// </summary>
    softPhonesRingCount: number

    /// <summary>
    /// Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ringing all at the same time. The default value is 'Sequentially'
    /// Enum: Sequentially, Simultaneously
    /// </summary>
    ringingMode: string

    /// <summary>
    /// Information on a call forwarding rule
    /// </summary>
    rules: RuleInfoCreateRuleRequest[]

    /// <summary>
    /// Specifies if mobile timeout is activated for the rule
    /// </summary>
    mobileTimeout: boolean
}

export default ForwardingInfoCreateRuleRequest