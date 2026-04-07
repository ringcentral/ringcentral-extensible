import type CommStateResource from "./CommStateResource.js";

interface CommInteractionRuleStateConditionResource {
  /**
   * Interaction condition type resource
   * Required
   * Example: State
   */
  type?: "Interaction" | "Schedule" | "State";

  /**
   */
  state?: CommStateResource;
}

export default CommInteractionRuleStateConditionResource;
