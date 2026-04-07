import CommReferenceStateResource from "./CommReferenceStateResource.js";

interface CommInteractionRuleStateConditionRequest {
  /**
   * Interaction condition type resource
   * Required
   * Example: State
   */
  type?: "Interaction" | "Schedule" | "State";

  /**
   * Required
   */
  state?: CommReferenceStateResource;
}

export default CommInteractionRuleStateConditionRequest;
