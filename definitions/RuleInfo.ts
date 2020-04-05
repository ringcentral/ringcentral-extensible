import CreateAnsweringRuleForwardingNumberInfo from './CreateAnsweringRuleForwardingNumberInfo'

class RuleInfo
{
    /// <summary>
    /// Forwarding number (or group) ordinal
    /// </summary>
    index: number

    /// <summary>
    /// Number of rings for a forwarding number (or group)
    /// </summary>
    ringCount: number

    /// <summary>
    /// Forwarding number status. Returned only if `showInactiveNumbers` is set to `true`
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Forwarding number (or group) data
    /// </summary>
    forwardingNumbers: CreateAnsweringRuleForwardingNumberInfo[]
}

export default RuleInfo