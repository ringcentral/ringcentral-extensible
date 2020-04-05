import ForwardingNumberInfoRulesCreateRuleRequest from './ForwardingNumberInfoRulesCreateRuleRequest'

class RuleInfoCreateRuleRequest
{
    /// <summary>
    /// Forwarding number (or group) ordinal. Not returned for inactive numbers
    /// </summary>
    index: number

    /// <summary>
    /// Number of rings for a forwarding number (or group). For inactive numbers the default value ('4') is returned
    /// </summary>
    ringCount: number

    /// <summary>
    /// Phone number status
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Forwarding number (or group) data
    /// </summary>
    forwardingNumbers: ForwardingNumberInfoRulesCreateRuleRequest[]
}

export default RuleInfoCreateRuleRequest