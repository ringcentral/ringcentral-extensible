import CommReferenceStateResource from "./CommReferenceStateResource.js";

interface CommInteractionRuleStateConditionRequest {
  /**
   * Ring target type
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
