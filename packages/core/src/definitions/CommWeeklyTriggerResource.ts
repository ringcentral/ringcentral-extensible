import CommWeeklyItemsResource from "./CommWeeklyItemsResource.js";

interface CommWeeklyTriggerResource {
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

export default CommWeeklyTriggerResource;
