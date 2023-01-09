/**
 * Filtering of calls based on the time spent by specified mailbox(es) on call
*/
interface TimeSpentFilter {
  /**
   * Minimum duration in seconds
   * Format: int64
   */
  minSeconds?: number;

  /**
   * Maximum duration in seconds
   * Format: int64
   */
  maxSeconds?: number;
}

export default TimeSpentFilter;
