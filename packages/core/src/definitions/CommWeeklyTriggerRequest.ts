import type CommWeeklyItemsResource from "./CommWeeklyItemsResource.js";

interface CommWeeklyTriggerRequest {
  /**
   * Trigger type
   * Required
   * Example: Weekly
   */
  triggerType?: "Daily" | "Weekly" | "Range";

  /**
   * Required
   */
  ranges?: CommWeeklyItemsResource;
}

export default CommWeeklyTriggerRequest;
