import ListCompanyAnsweringRuleInfo from "./ListCompanyAnsweringRuleInfo";
import EnumeratedPagingModel from "./EnumeratedPagingModel";
import PageNavigationModel from "./PageNavigationModel";

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

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default CompanyAnsweringRuleList;
