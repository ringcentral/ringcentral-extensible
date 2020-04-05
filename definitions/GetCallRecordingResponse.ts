class GetCallRecordingResponse
{
    /// <summary>
    /// Internal identifier of a call recording
    /// </summary>
    id: string

    /// <summary>
    /// Link to a call recording binary content
    /// </summary>
    contentUri: string

    /// <summary>
    /// Call recording file format. Supported format is audio/x-wav
    /// </summary>
    contentType: string

    /// <summary>
    /// Recorded call duration
    /// </summary>
    duration: number
}

export default GetCallRecordingResponse