import type CommInteractionRuleScheduleResourceTriggers from "./CommInteractionRuleScheduleResourceTriggers.js";

interface CommInteractionRuleScheduleResource {
  /**
   * Start date-time
   */
  startDateTime?: string;

  /**
   * End date-time
   */
  endDateTime?: string;

  /**
   * Trigger information
   */
  triggers?: CommInteractionRuleScheduleResourceTriggers[];
}

export default CommInteractionRuleScheduleResource;
