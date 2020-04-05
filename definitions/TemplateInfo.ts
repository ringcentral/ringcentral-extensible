class TemplateInfo
{
    /// <summary>
    /// Link to a template
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a template
    /// </summary>
    id: string

    /// <summary>
    /// Enum: UserSettings, CallHandling
    /// </summary>
    type: string

    /// <summary>
    /// Name of a template
    /// </summary>
    name: string

    /// <summary>
    /// Time of a template creation
    /// </summary>
    creationTime: string

    /// <summary>
    /// Time of the last template modification
    /// </summary>
    lastModifiedTime: string
}

export default TemplateInfo