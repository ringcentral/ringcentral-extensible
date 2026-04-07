import CommFromResource from "./CommFromResource.js";

interface CommInteractionRuleInteractionConditionResource {
  /**
   * Interaction condition type resource
   * Required
   * Example: Interaction
   */
  type?: "Interaction" | "Schedule" | "State";

  /**
   * Required
   */
  from?: CommFromResource[];

  /**
   * Required
   */
  to?: string[];
}

export default CommInteractionRuleInteractionConditionResource;
