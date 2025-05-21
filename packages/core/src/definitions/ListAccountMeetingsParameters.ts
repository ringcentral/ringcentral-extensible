/**
 * Query parameters for operation listAccountMeetings
 */
interface ListAccountMeetingsParameters {
  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;

  /**
   * Number of meeting records requested
   * Maximum: 100
   * Minimum: 10
   * Format: int32
   * Default: 25
   */
  perPage?: number;

  /**
   * ISO 8601 datetime value used to filter meetings that represents the beginning of the range for `startTime`
   * Format: date-time
   */
  startTimeFrom?: string;

  /**
   * ISO 8601 datetime value used to filter meetings that represents the end of the range for `startTime`
   * Format: date-time
   */
  startTimeTo?: string;

  /**
   * Comma-separated list of fields with optional sort direction. Use a '+' prefix for ascending order or '-' for descending order. E.g., orderBy=+startTime
   * Default: -startTime
   */
  orderBy?: string;
}

export default ListAccountMeetingsParameters;
