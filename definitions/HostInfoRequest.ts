class HostInfoRequest
{
    /// <summary>
    /// Link to the meeting host resource
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of an extension which is assigned to be a meeting host. The default value is currently logged-in extension identifier
    /// </summary>
    id: string
}

export default HostInfoRequest