import OrderBy from './OrderBy'

class SearchDirectoryEntriesRequest
{
    /// <summary>
    /// String value to filter the contacts. The value specified is searched through the following fields: `firstName`, `lastName`, `extensionNumber`, `phoneNumber`, `email`
    /// </summary>
    searchString: string

    /// <summary>
    /// If 'True' then contacts of all accounts in federation are returned. If 'False' then only contacts of the current account are returned, and account section is eliminated in this case
    /// Default: true
    /// </summary>
    showFederated: boolean

    /// <summary>
    /// Type of extension to filter the contacts
    /// Enum: User, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, ParkLocation, IvrMenu, Limited, ApplicationExtension, Site, Bot
    /// </summary>
    extensionType: string

    /// <summary>
    /// Sorting settings
    /// </summary>
    orderBy: OrderBy[]

    /// <summary>
    /// </summary>
    page: number

    /// <summary>
    /// </summary>
    perPage: number
}

export default SearchDirectoryEntriesRequest