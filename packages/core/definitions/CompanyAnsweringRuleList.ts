import {
  ListCompanyAnsweringRuleInfo,
  CallHandlingPagingInfo,
  CallHandlingNavigationInfo,
} from './index';

class CompanyAnsweringRuleList {
  /**
   * Link to an answering rule resource
   */
  uri?: string;

  /**
   * List of company answering rules
   */
  records?: ListCompanyAnsweringRuleInfo[];

  /**
   * Information on paging
   */
  paging?: CallHandlingPagingInfo;

  /**
   * Information on navigation
   */
  navigation?: CallHandlingNavigationInfo;
}

export default CompanyAnsweringRuleList;
