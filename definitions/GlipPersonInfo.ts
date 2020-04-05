class GlipPersonInfo
{
    /// <summary>
    /// Internal identifier of a user
    /// Required
    /// </summary>
    id: string

    /// <summary>
    /// First name of a user
    /// </summary>
    firstName: string

    /// <summary>
    /// Last name of a user
    /// </summary>
    lastName: string

    /// <summary>
    /// Email of a user
    /// </summary>
    email: string

    /// <summary>
    /// Photo of a user
    /// </summary>
    avatar: string

    /// <summary>
    /// Internal identifier of a company
    /// </summary>
    companyId: string

    /// <summary>
    /// Time of creation in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Time of the last modification in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    lastModifiedTime: string
}

export default GlipPersonInfo