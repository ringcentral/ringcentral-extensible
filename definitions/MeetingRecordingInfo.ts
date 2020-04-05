class MeetingRecordingInfo
{
    /// <summary>
    /// </summary>
    id: string

    /// <summary>
    /// </summary>
    contentDownloadUri: string

    /// <summary>
    /// Enum: video/mp4, audio/m4a, text/vtt
    /// </summary>
    contentType: string

    /// <summary>
    /// </summary>
    size: number

    /// <summary>
    /// Starting time of a recording
    /// </summary>
    startTime: string

    /// <summary>
    /// Ending time of a recording
    /// </summary>
    endTime: string

    /// <summary>
    /// Enum: Completed, Processing
    /// </summary>
    status: string
}

export default MeetingRecordingInfo