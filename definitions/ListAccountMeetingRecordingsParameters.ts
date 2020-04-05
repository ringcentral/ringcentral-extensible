class ListAccountMeetingRecordingsParameters
{
    /// <summary>
    /// Internal identifier of a meeting. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
    /// </summary>
    meetingId: string

    /// <summary>
    /// Recordings of meetings started after the time specified will be returned. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
    /// </summary>
    meetingStartTimeFrom: string

    /// <summary>
    /// Recordings of meetings started before the time specified will be returned. The default value is current time. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified
    /// </summary>
    meetingStartTimeTo: string

    /// <summary>
    /// Page number
    /// </summary>
    page: number

    /// <summary>
    /// Number of items per page. The `max` value is supported to indicate the maximum size - 300
    /// Maximum: 300
    /// Default: 100
    /// </summary>
    perPage: number
}

export default ListAccountMeetingRecordingsParameters