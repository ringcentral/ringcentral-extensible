/**
 * Query parameters for operation listAccountMeetingRecordings
*/
interface ListAccountMeetingRecordingsParameters {
  /**
   * Internal identifier of a meeting. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
   */
  meetingId?: string;

  /**
   * Recordings of meetings in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format started after the time specified will be returned, for example *2016-03-10T18:07:52.534Z*. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
   */
  meetingStartTimeFrom?: string;

  /**
   * Recordings of meetings in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format started before the time specified will be returned, for example *2016-03-10T18:07:52.534Z*. The default value is current time. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
   */
  meetingStartTimeTo?: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Number of items per page. The `max` value is supported to indicate the maximum size - 300
   * Maximum: 300
   * Default: 100
   */
  perPage?: number;
}

export default ListAccountMeetingRecordingsParameters;
