interface CommDailyTriggerResource {
  /**
   * Trigger type
   * Required
   * Example: Daily
   */
  triggerType?: "Daily" | "Weekly" | "Range";

  /**
   * Start time in format hh:mm:ss
   * Required
   * Format: time
   */
  startTime?: string;

  /**
   * End time in format hh:mm:ss
   * Required
   * Format: time
   */
  endTime?: string;
}

export default CommDailyTriggerResource;
