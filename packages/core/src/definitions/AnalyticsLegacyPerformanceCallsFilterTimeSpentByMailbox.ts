/**
 * Conditional aggregation of calls based on the time spent by specified mailbox(es) on call
*/
interface AnalyticsLegacyPerformanceCallsFilterTimeSpentByMailbox {
  /**
   * Format: int64
   */
  minValueSeconds?: number;

  /**
   * Format: int64
   */
  maxValueSeconds?: number;
}

export default AnalyticsLegacyPerformanceCallsFilterTimeSpentByMailbox;
