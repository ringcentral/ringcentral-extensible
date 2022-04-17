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
   */
  paging?: CallHandlingPagingInfo;

  /**
   */
  navigation?: CallHandlingNavigationInfo;
}
export default CompanyAnsweringRuleList;
