import CommInteractionRuleScheduleResourceTriggers from "./CommInteractionRuleScheduleResourceTriggers.js";

interface CommInteractionRuleScheduleResource {
  /**
   * Start date-time
   * Format: date-time
   */
  startDateTime?: string;

  /**
   * End date-time
   * Format: date-time
   */
  endDateTime?: string;

  /**
   * Trigger information
   */
  triggers?: CommInteractionRuleScheduleResourceTriggers[];
}

export default CommInteractionRuleScheduleResource;
