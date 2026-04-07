import type CommInteractionRuleResource from "./CommInteractionRuleResource.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
