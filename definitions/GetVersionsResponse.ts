import VersionInfo from './VersionInfo'

class GetVersionsResponse
{
    /// <summary>
    /// Canonical URI of the API version
    /// </summary>
    uri: string

    /// <summary>
    /// Full API version information: uri, number, release date
    /// </summary>
    apiVersions: VersionInfo[]

    /// <summary>
    /// Server version
    /// </summary>
    serverVersion: string

    /// <summary>
    /// Server revision
    /// </summary>
    serverRevision: string
}

export default GetVersionsResponse