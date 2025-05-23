/**
 * Query parameters for operation rcwHistoryListAllSessions
 */
interface RcwHistoryListAllSessionsParameters {
  /**
   * Filter to return only webinar sessions containing particular substring within their names
   * Example: All-hands
   */
  nameFragment?: string;

  /**
   * Filter to return only webinar sessions in certain status. Multiple values are supported.
   * Example: Active,Finished
   */
  status?: ("Scheduled" | "Active" | "Finished")[];

  /**
   * The beginning of the time window by 'endTime' .
   * Format: date-time
   */
  endTimeFrom?: string;

  /**
   * The end of the time window by 'endTime' .
   * Format: date-time
   */
  endTimeTo?: string;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;
}

export default RcwHistoryListAllSessionsParameters;
