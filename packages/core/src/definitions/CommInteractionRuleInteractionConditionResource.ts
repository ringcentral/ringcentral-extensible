import CommFromResource from "./CommFromResource.js";

interface CommInteractionRuleInteractionConditionResource {
  /**
   * Ring target type
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
