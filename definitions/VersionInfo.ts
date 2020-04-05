class VersionInfo
{
    /// <summary>
    /// Canonical URI of API versions
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

export default VersionInfo