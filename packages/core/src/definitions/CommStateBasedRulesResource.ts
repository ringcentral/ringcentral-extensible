import CommStateBasedRuleResource from "./CommStateBasedRuleResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

/**
 * State-based rule information
 */
interface CommStateBasedRulesResource {
  /**
   * Required
   */
  records?: CommStateBasedRuleResource[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CommStateBasedRulesResource;
