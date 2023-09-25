import type ListCompanyAnsweringRuleInfo from './ListCompanyAnsweringRuleInfo';
import type EnumeratedPagingModel from './EnumeratedPagingModel';
import type PageNavigationModel from './PageNavigationModel';

interface CompanyAnsweringRuleList {
  /**
   * Link to an answering rule resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of company answering rules
   */
  records?: ListCompanyAnsweringRuleInfo[];

  /**
   */
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default CompanyAnsweringRuleList;
