/**
 * Query parameters for operation analyticsCallsAggregationFetch
 */
interface AnalyticsCallsAggregationFetchParameters {
  /**
   * The current page number (positive numbers only)
   * Minimum: 1
   * Format: int32
   */
  page?: number;

  /**
   * Number of records displayed on a page (positive numbers only, max value of 200)
   * Maximum: 200
   * Minimum: 1
   * Format: int32
   */
  perPage?: number;
}

export default AnalyticsCallsAggregationFetchParameters;
