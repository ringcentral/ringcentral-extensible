class ExtensionListEventBody
{
    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    extensionId: string

    /// <summary>
    /// Type of extension info change
    /// Enum: Create, Update, Delete
    /// </summary>
    eventType: string

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default ExtensionListEventBody