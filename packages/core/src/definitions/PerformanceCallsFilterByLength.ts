/**
 * Conditional aggregation of calls based on the overall call length
*/
interface PerformanceCallsFilterByLength {
  /**
   * Format: int64
   */
  minValueSeconds?: number;

  /**
   * Format: int64
   */
  maxValueSeconds?: number;
}

export default PerformanceCallsFilterByLength;
