import CompanyAnsweringRuleCallersInfoRequest from './CompanyAnsweringRuleCallersInfoRequest'
import CompanyAnsweringRuleCalledNumberInfoRequest from './CompanyAnsweringRuleCalledNumberInfoRequest'
import CompanyAnsweringRuleScheduleInfo from './CompanyAnsweringRuleScheduleInfo'
import GreetingInfo from './GreetingInfo'

class CompanyAnsweringRuleInfo
{
    /// <summary>
    /// Internal identifier of an answering rule
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of an answering rule
    /// </summary>
    uri: string

    /// <summary>
    /// Specifies if the rule is active or inactive. The default value is 'True'
    /// Default: true
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Type of an answering rule
    /// Default: Custom
    /// Enum: BusinessHours, AfterHours, Custom
    /// </summary>
    type: string

    /// <summary>
    /// Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number
    /// </summary>
    name: string

    /// <summary>
    /// Answering rule will be applied when calls are received from the specified caller(s)
    /// </summary>
    callers: CompanyAnsweringRuleCallersInfoRequest[]

    /// <summary>
    /// Answering rule will be applied when calling the specified number(s)
    /// </summary>
    calledNumbers: CompanyAnsweringRuleCalledNumberInfoRequest[]

    /// <summary>
    /// Schedule when an answering rule should be applied
    /// </summary>
    schedule: CompanyAnsweringRuleScheduleInfo

    /// <summary>
    /// Specifies how incoming calls are forwarded. The default value is 'Operator' 'Operator' - play company greeting and forward to operator extension 'Disconnect' - play company greeting and disconnect 'Bypass' - bypass greeting to go to selected extension = ['Operator', 'Disconnect', 'Bypass']
    /// Enum: Operator, Disconnect, Bypass
    /// </summary>
    callHandlingAction: string

    /// <summary>
    /// Extension to which the call is forwarded in 'Bypass' mode
    /// </summary>
    extension: CompanyAnsweringRuleCallersInfoRequest

    /// <summary>
    /// Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List
    /// </summary>
    greetings: GreetingInfo[]
}

export default CompanyAnsweringRuleInfo