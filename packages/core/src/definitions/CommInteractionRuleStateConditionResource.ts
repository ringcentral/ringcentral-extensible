import CommStateResource from "./CommStateResource.js";

interface CommInteractionRuleStateConditionResource {
  /**
   * Ring target type
   * Required
   * Example: State
   */
  type?: "Interaction" | "Schedule" | "State";

  /** */
  state?: CommStateResource;
}

export default CommInteractionRuleStateConditionResource;
