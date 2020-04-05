class ExtensionStatusInfo
{
    /// <summary>
    /// A free-form user comment, describing the status change reason
    /// </summary>
    comment: string

    /// <summary>
    /// Type of suspension
    /// Enum: Voluntarily, Involuntarily, SuspendedVoluntarily
    /// </summary>
    reason: string
}

export default ExtensionStatusInfo