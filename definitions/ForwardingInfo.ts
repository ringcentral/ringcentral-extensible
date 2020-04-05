import RuleInfo from './RuleInfo'

class ForwardingInfo
{
    /// <summary>
    /// Specifies if the user's softphone(s) are notified before forwarding the incoming call to desk phones and forwarding numbers
    /// </summary>
    notifyMySoftPhones: boolean

    /// <summary>
    /// Specifies if the administrator's softphone is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'False'
    /// </summary>
    notifyAdminSoftPhones: boolean

    /// <summary>
    /// Number of rings before forwarding starts
    /// </summary>
    softPhonesRingCount: number

    /// <summary>
    /// Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ring all at the same time
    /// Enum: Sequentially, Simultaneously
    /// </summary>
    ringingMode: string

    /// <summary>
    /// Information on a call forwarding rule
    /// </summary>
    rules: RuleInfo[]

    /// <summary>
    /// Specifies if mobile timeout is activated for the rule
    /// </summary>
    mobileTimeout: boolean
}

export default ForwardingInfo