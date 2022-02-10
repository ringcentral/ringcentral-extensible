/**
 * Conditional aggregation of calls based on the time spent on a call by the specified mailbox(es)
 */
class PerformanceCallsFilterTimeSpentByMailbox {
  /**
   * Format: int64
   */
  minValueSeconds?: number;

  /**
   * Format: int64
   */
  maxValueSeconds?: number;
}
export default PerformanceCallsFilterTimeSpentByMailbox;
