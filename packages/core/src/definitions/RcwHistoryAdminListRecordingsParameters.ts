/**
 * Query parameters for operation rcwHistoryAdminListRecordings
 */
interface RcwHistoryAdminListRecordingsParameters {
  /**
   * Filter to return only webinar recordings containing particular substring within their names
   * Example: All-hands
   */
  nameFragment?: string;

  /**
   * The beginning of the time window by 'creationTime' .
   * Format: date-time
   */
  creationTimeFrom?: string;

  /**
   * The end of the time window by 'creationTime' .
   * Format: date-time
   */
  creationTimeTo?: string;

  /**
   * The status of the recording.
   */
  status?: ('Processing' | 'Available' | 'Failed' | 'Purged')[];

  /**
   * Identifier of the user who hosts a webinar (if omitted, webinars hosted by all company users will be returned)
   * Example: 77777777
   */
  hostUserId?: string[];

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

export default RcwHistoryAdminListRecordingsParameters;
