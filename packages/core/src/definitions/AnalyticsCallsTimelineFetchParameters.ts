/**
 * Query parameters for operation analyticsCallsTimelineFetch
 */
interface AnalyticsCallsTimelineFetchParameters {
  /**
   * Aggregation interval
   */
  interval?: 'Hour' | 'Day' | 'Week' | 'Month';

  /**
   * The current page number (positive numbers only)
   * Minimum: 1
   * Format: int32
   */
  page?: number;

  /**
   * Number of records displayed on a page (positive numbers only, max value of 20)
   * Maximum: 20
   * Minimum: 1
   * Format: int32
   */
  perPage?: number;
}

export default AnalyticsCallsTimelineFetchParameters;
