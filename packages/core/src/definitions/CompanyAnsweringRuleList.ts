import ListCompanyAnsweringRuleInfo from './ListCompanyAnsweringRuleInfo';
import EnumeratedPaging from './EnumeratedPaging';
import NavigationInfo from './NavigationInfo';

interface CompanyAnsweringRuleList {
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
  paging?: EnumeratedPaging;

  /**
   */
  navigation?: NavigationInfo;
}

export default CompanyAnsweringRuleList;
