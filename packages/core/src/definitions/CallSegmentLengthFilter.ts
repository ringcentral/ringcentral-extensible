/**
 * Duration bounds for the segment
 */
interface CallSegmentLengthFilter {
  /**
   * Minimum duration of segment in seconds
   * Format: int64
   */
  minSeconds?: number;

  /**
   * Maximum duration of segment in seconds
   * Format: int64
   */
  maxSeconds?: number;
}

export default CallSegmentLengthFilter;
