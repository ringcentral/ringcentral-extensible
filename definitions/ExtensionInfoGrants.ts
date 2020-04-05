class ExtensionInfoGrants
{
    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of an extension
    /// </summary>
    uri: string

    /// <summary>
    /// Extension short number (usually 3 or 4 digits)
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Name of extension
    /// </summary>
    name: string

    /// <summary>
    /// Extension type
    /// Enum: User, Fax User, VirtualUser, DigitalUser, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, IvrMenu, ApplicationExtension, ParkLocation
    /// </summary>
    type: string
}

export default ExtensionInfoGrants