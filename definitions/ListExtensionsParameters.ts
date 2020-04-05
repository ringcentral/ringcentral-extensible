class ListExtensionsParameters
{
    /// <summary>
    /// Extension number to retrieve
    /// </summary>
    extensionId: string

    /// <summary>
    /// Extension email address
    /// </summary>
    email: string

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are allowed
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without `extensionNumber` attribute are returned. If not specified, then all extensions are returned.
    /// </summary>
    status: string[]

    /// <summary>
    /// Extension type. Multiple values are supported
    /// </summary>
    type: string[]
}

export default ListExtensionsParameters