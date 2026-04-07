import type ListCompanyAnsweringRuleInfo from "./ListCompanyAnsweringRuleInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

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
