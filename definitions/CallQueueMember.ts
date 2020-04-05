import SiteResource from './SiteResource'

class CallQueueMember
{
    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    id: string

    /// <summary>
    /// Extension full name
    /// </summary>
    name: string

    /// <summary>
    /// Extension number
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Extension site
    /// </summary>
    site: SiteResource
}

export default CallQueueMember