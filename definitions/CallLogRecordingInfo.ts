class CallLogRecordingInfo
{
    /// <summary>
    /// Internal identifier of the call recording
    /// </summary>
    id: string

    /// <summary>
    /// Link to the call recording metadata resource
    /// </summary>
    uri: string

    /// <summary>
    /// Indicates recording mode used
    /// Enum: Automatic, OnDemand
    /// </summary>
    type: string

    /// <summary>
    /// Link to the call recording binary content
    /// </summary>
    contentUri: string
}

export default CallLogRecordingInfo