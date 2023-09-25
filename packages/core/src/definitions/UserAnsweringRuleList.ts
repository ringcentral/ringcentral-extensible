import type AnsweringRuleInfo from './AnsweringRuleInfo';
import type EnumeratedPagingModel from './EnumeratedPagingModel';
import type PageNavigationModel from './PageNavigationModel';

interface UserAnsweringRuleList {
  /**
   * Canonical URI of an answering rule list resource
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/v1.0/account/240913004/extension/240972004/answering-rule?page=1&perPage=100
   */
  uri?: string;

  /**
   * List of answering rules
   */
  records?: AnsweringRuleInfo[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default UserAnsweringRuleList;
