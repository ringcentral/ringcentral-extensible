import ListCompanyAnsweringRuleInfo from "./ListCompanyAnsweringRuleInfo.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

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
