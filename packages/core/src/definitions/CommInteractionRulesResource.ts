import CommInteractionRuleResource from "./CommInteractionRuleResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CommInteractionRulesResource {
  /**
   * Required
   */
  records?: CommInteractionRuleResource[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CommInteractionRulesResource;
