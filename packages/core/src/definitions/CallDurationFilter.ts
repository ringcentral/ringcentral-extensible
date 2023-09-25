/**
 * Filtering of calls based on the overall call length
 */
interface CallDurationFilter {
  /**
   * Minimum duration of call in seconds
   * Format: int64
   */
  minSeconds?: number;

  /**
   * Maximum duration of call in seconds
   * Format: int64
   */
  maxSeconds?: number;
}

export default CallDurationFilter;
