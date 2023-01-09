import UserAnsweringRuleListRecord from './UserAnsweringRuleListRecord';
import EnumeratedPaging from './EnumeratedPaging';
import UserAnsweringRuleListNavigation from './UserAnsweringRuleListNavigation';

interface UserAnsweringRuleList {
  /**
   * Canonical URI of an answering rule list resource
   * Example: https://platform.ringcentral.com/restapi/v1.0/account/240913004/extension/240972004/answering-rule?page=1&perPage=100
   */
  uri?: string;

  /**
   * List of answering rules
   */
  records?: UserAnsweringRuleListRecord[];

  /**
   */
  paging?: EnumeratedPaging;

  /**
   */
  navigation?: UserAnsweringRuleListNavigation;
}

export default UserAnsweringRuleList;
