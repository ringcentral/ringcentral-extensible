import CalledNumberInfo from './CalledNumberInfo'
import CompanyAnsweringRuleExtensionInfo from './CompanyAnsweringRuleExtensionInfo'

class ListCompanyAnsweringRuleInfo
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
    /// Type of an answering rule, the default value is 'Custom' = ['BusinessHours', 'AfterHours', 'Custom']
    /// Enum: BusinessHours, AfterHours, Custom
    /// </summary>
    type: string

    /// <summary>
    /// Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number
    /// </summary>
    name: string

    /// <summary>
    /// Answering rules are applied when calling to selected number(s)
    /// </summary>
    calledNumbers: CalledNumberInfo[]

    /// <summary>
    /// </summary>
    extension: CompanyAnsweringRuleExtensionInfo
}

export default ListCompanyAnsweringRuleInfo