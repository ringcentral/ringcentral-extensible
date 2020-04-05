class ListLocationsParameters
{
    /// <summary>
    /// Sorts results by the property specified
    /// Default: City
    /// Enum: Npa, City
    /// </summary>
    orderBy: string

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
    /// Internal identifier of a state
    /// </summary>
    stateId: string

    /// <summary>
    /// Specifies if nxx codes are returned
    /// </summary>
    withNxx: boolean
}

export default ListLocationsParameters