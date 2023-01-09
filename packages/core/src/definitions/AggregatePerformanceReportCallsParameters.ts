/**
 * Query parameters for operation aggregatePerformanceReportCalls
*/
interface AggregatePerformanceReportCallsParameters {
  /**
   * The current page number
   * Minimum: 1
   * Format: int32
   */
  page?: number;

  /**
   * Number of records displayed on a page
   * Format: int32
   */
  perPage?: number;
}

export default AggregatePerformanceReportCallsParameters;
