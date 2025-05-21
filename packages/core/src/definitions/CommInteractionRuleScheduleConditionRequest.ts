import CommInteractionRuleScheduleResource from "./CommInteractionRuleScheduleResource.js";

interface CommInteractionRuleScheduleConditionRequest {
  /**
   * Ring target type
   * Required
   * Example: Schedule
   */
  type?: "Interaction" | "Schedule" | "State";

  /**
   * Required
   */
  schedule?: CommInteractionRuleScheduleResource;
}

export default CommInteractionRuleScheduleConditionRequest;
