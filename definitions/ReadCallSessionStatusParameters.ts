class ReadCallSessionStatusParameters
{
    /// <summary>
    /// The date and time of a call session latest change
    /// </summary>
    timestamp: string

    /// <summary>
    /// The time frame of awaiting for a status change before sending the resulting one in response
    /// </summary>
    timeout: string
}

export default ReadCallSessionStatusParameters