class GlipCompany
{
    /// <summary>
    /// Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
    /// Required
    /// </summary>
    id: string

    /// <summary>
    /// Name of a company
    /// </summary>
    name: string

    /// <summary>
    /// Domain name of a company
    /// </summary>
    domain: string

    /// <summary>
    /// Datetime of creation in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// Required
    /// </summary>
    creationTime: string

    /// <summary>
    /// Datetime of last modification in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// Required
    /// </summary>
    lastModifiedTime: string
}

export default GlipCompany