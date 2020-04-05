class ListExtensionGrantsParameters
{
    /// <summary>
    /// Type of extension to be returned. Multiple values are supported
    /// Enum: User, FaxUser, VirtualUser, DigitalUser, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, IvrMenu, ApplicationExtension, ParkLocation, Limited, Bot
    /// </summary>
    extensionType: string

    /// <summary>
    /// Default: 1
    /// </summary>
    page: string

    /// <summary>
    /// Default: 100
    /// </summary>
    perPage: string
}

export default ListExtensionGrantsParameters