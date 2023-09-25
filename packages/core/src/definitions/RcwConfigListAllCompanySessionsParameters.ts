/**
 * Query parameters for operation rcwConfigListAllCompanySessions
 */
interface RcwConfigListAllCompanySessionsParameters {
  /**
   * Session status (for the purposes of Configuration service)
   * Example: Scheduled
   */
  status?: 'Scheduled' | 'Active' | 'Finished';

  /**
   * The beginning of the time window by 'endTime' (it is calculated as scheduledStartTime+scheduledDuration)
   * Format: date-time
   */
  endTimeFrom?: string;

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

export default RcwConfigListAllCompanySessionsParameters;
