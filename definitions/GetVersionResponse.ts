class GetVersionResponse
{
    /// <summary>
    /// Canonical URI of the version info resource
    /// </summary>
    uri: string

    /// <summary>
    /// Version of the RingCentral REST API
    /// </summary>
    versionString: string

    /// <summary>
    /// Release date of this version
    /// </summary>
    releaseDate: string

    /// <summary>
    /// URI part determining the current version
    /// </summary>
    uriString: string
}

export default GetVersionResponse