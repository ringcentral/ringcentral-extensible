/**
 * Query parameters for operation listVideoMeetings
 */
interface ListVideoMeetingsParameters {
  /**
   * Search text
   */
  text?: string;

  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Format: int32
   */
  perPage?: number;

  /**
   * Specifies types meeting to be returned. Possible values:
   *    - <empty> (not passed) - return only the meetings where the requesting user is the participant OR host OR deputy OR watcher;
   *    - `All`- return `Alive` meetings where the requesting user is the host OR deputy OR watcher;
   *    - `My`- return `Alive` meetings where the requesting user is the host OR deputy;
   *    - `Shared` - return `Alive` meetings where the requesting user is the watcher AND not host;
   *    - `Deleted` - return `Deleted` meetings where the requesting user is the host OR deputy.
   */
  type?: "All" | "My" | "Deleted" | "Shared";

  /**
   * Unix timestamp in milliseconds (inclusive) indicates the start time of meetings which should be included in response
   * Format: int64
   */
  startTime?: number;

  /**
   * Unix timestamp in milliseconds (inclusive) indicates the end time of meetings which should be included in response
   * Format: int64
   */
  endTime?: number;
}

export default ListVideoMeetingsParameters;
