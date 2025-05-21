import CommWeeklyItemsResource from "./CommWeeklyItemsResource.js";

interface CommStateScheduleResourceTriggers {
  /**
   * Trigger type
   * Example: Range
   */
  triggerType?: "Daily" | "Weekly" | "Range";

  /**
   * Start time in format hh:mm:ss
   * Format: time
   */
  startTime?: string;

  /**
   * End time in format hh:mm:ss
   * Format: time
   */
  endTime?: string;

  /** */
  ranges?: CommWeeklyItemsResource;
}

export default CommStateScheduleResourceTriggers;
