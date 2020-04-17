import { UserAnsweringRuleListRecord, UserAnsweringRuleListPaging, UserAnsweringRuleListNavigation } from '.'

class UserAnsweringRuleList
{
  /**
   * Canonical URI of an answering rule list resource
   */
  uri?: string

  /**
   * List of answering rules
   */
  records?: UserAnsweringRuleListRecord[]

  /**
   */
  paging?: UserAnsweringRuleListPaging

  /**
   */
  navigation?: UserAnsweringRuleListNavigation
}

export default UserAnsweringRuleList
