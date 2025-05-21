import CommFromResource from "./CommFromResource.js";

interface CommInteractionRuleInteractionConditionRequest {
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

export default CommInteractionRuleInteractionConditionRequest;
