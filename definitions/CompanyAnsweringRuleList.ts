import ListCompanyAnsweringRuleInfo from './ListCompanyAnsweringRuleInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'

class CompanyAnsweringRuleList
{
    /// <summary>
    /// Link to an answering rule resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of company answering rules
    /// </summary>
    records: ListCompanyAnsweringRuleInfo[]

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo
}

export default CompanyAnsweringRuleList