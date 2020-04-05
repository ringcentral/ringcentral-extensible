// Linked message (Fax/Voicemail)
class CallLogRecordMessage
{
    /// <summary>
    /// Internal identifier of a message
    /// </summary>
    id: string

    /// <summary>
    /// Type of a message
    /// </summary>
    type: string

    /// <summary>
    /// Link to a message resource
    /// </summary>
    uri: string
}

export default CallLogRecordMessage