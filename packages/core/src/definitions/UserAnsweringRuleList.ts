import CallHandlingRuleInfo from "./CallHandlingRuleInfo.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import PageNavigationModel from "./PageNavigationModel.js";

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
  records?: CallHandlingRuleInfo[];

  /** */
  paging?: EnumeratedPagingModel;

  /** */
  navigation?: PageNavigationModel;
}

export default UserAnsweringRuleList;
