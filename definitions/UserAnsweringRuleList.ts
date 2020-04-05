import UserAnsweringRuleListRecord from './UserAnsweringRuleListRecord'
import UserAnsweringRuleListPaging from './UserAnsweringRuleListPaging'
import UserAnsweringRuleListNavigation from './UserAnsweringRuleListNavigation'

class UserAnsweringRuleList
{
    /// <summary>
    /// Canonical URI of an answering rule list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of answering rules
    /// </summary>
    records: UserAnsweringRuleListRecord[]

    /// <summary>
    /// </summary>
    paging: UserAnsweringRuleListPaging

    /// <summary>
    /// </summary>
    navigation: UserAnsweringRuleListNavigation
}

export default UserAnsweringRuleList