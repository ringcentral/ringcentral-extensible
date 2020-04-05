class ListExtensionsParameters
{
    /**
     * Extension number to retrieve
     */
    extensionId?: string

    /**
     * Extension email address
     */
    email?: string

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed
     * Default: 1
     */
    page?: number

    /**
     * Indicates the page size (number of items)
     * Default: 100
     */
    perPage?: number

    /**
     * Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without `extensionNumber` attribute are returned. If not specified, then all extensions are returned.
     */
    status?: string[]

    /**
     * Extension type. Multiple values are supported
     */
    type?: string[]
}

export default ListExtensionsParameters