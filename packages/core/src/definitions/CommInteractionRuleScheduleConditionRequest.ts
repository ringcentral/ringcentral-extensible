import CommInteractionRuleScheduleResource from "./CommInteractionRuleScheduleResource.js";

interface CommInteractionRuleScheduleConditionRequest {
    /**
   * Interaction condition type resource
   * Required
   * Example: Schedule
   */
  type?: ('Interaction' | 'Schedule' | 'State');

  /**
   * Required
   */
  schedule?: CommInteractionRuleScheduleResource;
}

export default CommInteractionRuleScheduleConditionRequest;
