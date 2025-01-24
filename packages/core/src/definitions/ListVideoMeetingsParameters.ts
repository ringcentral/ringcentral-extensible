/**
 * Query parameters for operation listVideoMeetings
 */
interface ListVideoMeetingsParameters {
  /**
   * Search text
   */
  text?: string;

  /**
   * Token to get the next page
   */
  pageToken?: string;

  /**
   * Number of records returned
   * Format: int32
   */
  perPage?: number;

  /**
   * Specify what kind of meeting should be returned. Possible values: All, My, Deleted, Shared
   *  Request type meaning in meeting search:
   *  `None` (not passed) - take meetings only where requested acc/ext is participant OR host OR deputy OR watcher.
   *  `ALL`- access rights of meeting is equal to Alive AND requested acc/ext  is in watchers list OR host OR deputy
   *  `My`- access rights of meeting is equal to Alive AND requested acc/ext is host OR deputy
   *  `Shared` - access rights of meeting is equal to Alive AND requested acc/ext is in watcher list AND not HOST
   *  `Deleted` - access rights of meeting is equal to Delete and requested acc/ext is host OR deputy
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
