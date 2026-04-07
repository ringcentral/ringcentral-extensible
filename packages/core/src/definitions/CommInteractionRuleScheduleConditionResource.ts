import CommInteractionRuleScheduleResource from "./CommInteractionRuleScheduleResource.js";

interface CommInteractionRuleScheduleConditionResource {
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

export default CommInteractionRuleScheduleConditionResource;
