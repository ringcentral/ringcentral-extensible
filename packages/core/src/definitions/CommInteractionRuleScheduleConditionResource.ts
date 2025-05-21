import CommInteractionRuleScheduleResource from "./CommInteractionRuleScheduleResource.js";

interface CommInteractionRuleScheduleConditionResource {
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

export default CommInteractionRuleScheduleConditionResource;
