class ListContactsParameters
{
    /// <summary>
    /// If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
    /// </summary>
    startsWith: string

    /// <summary>
    /// Sorts results by the specified property
    /// </summary>
    sortBy: string[]

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are accepted
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// </summary>
    phoneNumber: string[]
}

export default ListContactsParameters